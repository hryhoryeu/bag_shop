# Generated by Django 3.2.9 on 2021-12-04 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_active', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('product_name', models.CharField(default='Not defined.', max_length=30)),
                ('description', models.CharField(default='Not defined.', max_length=100)),
                ('thumbnail', models.URLField()),
            ],
            options={
                'abstract': False,
            },
        ),
    ]