# Generated by Django 3.2.25 on 2025-05-13 05:27

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('sku', models.CharField(max_length=50, unique=True)),
                ('current_stock', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='StockMovement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('movement_type', models.CharField(choices=[('IN', 'Stock In'), ('OUT', 'Stock Out')], max_length=3)),
                ('quantity', models.PositiveIntegerField()),
                ('timestamp', models.DateTimeField(default=django.utils.timezone.now)),
                ('metadata', django.contrib.postgres.fields.jsonb.JSONField(blank=True, default=dict)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.product')),
            ],
        ),
        migrations.AddIndex(
            model_name='stockmovement',
            index=models.Index(fields=['timestamp'], name='app_stockmo_timesta_eb0d10_idx'),
        ),
        migrations.AddIndex(
            model_name='stockmovement',
            index=models.Index(fields=['product'], name='app_stockmo_product_7846f9_idx'),
        ),
    ]
