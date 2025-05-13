from django.core.management.base import BaseCommand
from app.models import Product 

class Command(BaseCommand):
    help = 'Displays current stock for all products'

    def handle(self, *args, **kwargs):
        products = Product.objects.all()
        for product in products:
            self.stdout.write(f"{product.name} (SKU: {product.sku}) - Stock: {product.current_stock}")
