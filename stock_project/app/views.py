from django.shortcuts import render, redirect
from .forms import StockMovementForm
from .models import StockMovement, Product
from django.contrib import messages
from django.db.models import F

def add_stock_movement(request):
    if request.method == 'POST':
        form = StockMovementForm(request.POST)
        if form.is_valid():
            movement = form.save(commit=False)
            product = movement.product

            if movement.movement_type == 'OUT' and product.current_stock < movement.quantity:
                messages.error(request, "Not enough stock available.")
            else:
                if movement.movement_type == 'IN':
                    product.current_stock += movement.quantity
                else:
                    product.current_stock -= movement.quantity
                product.save()
                movement.save()
                return redirect('movement_history')
    else:
        form = StockMovementForm()
    return render(request, 'add_movement.html', {'form': form})


def movement_history(request):
    movements = StockMovement.objects.all().order_by('-timestamp')
    return render(request, 'movement_history.html', {'movements': movements})
