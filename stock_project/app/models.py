from django.db import models
from django.utils import timezone
from django.contrib.postgres.fields import JSONField

class Product(models.Model):
    name = models.CharField(max_length=100)
    sku = models.CharField(max_length=50, unique=True)
    current_stock = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class StockMovement(models.Model):
    MOVEMENT_TYPES = (
        ('IN', 'Stock In'),
        ('OUT', 'Stock Out'),
    )

    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    movement_type = models.CharField(max_length=3, choices=MOVEMENT_TYPES)
    quantity = models.PositiveIntegerField()
    timestamp = models.DateTimeField(default=timezone.now)
    metadata = JSONField(default=dict, blank=True)

    def __str__(self):
        return f"{self.product.name} - {self.movement_type} - {self.quantity}"
    
    class Meta:
            indexes = [
            models.Index(fields=['timestamp']),
            models.Index(fields=['product']),
        ]
