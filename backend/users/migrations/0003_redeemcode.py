# Generated by Django 2.2.6 on 2019-10-30 23:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20191031_0718'),
    ]

    operations = [
        migrations.CreateModel(
            name='RedeemCode',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('code', models.CharField(max_length=5)),
                ('is_redeemed', models.BooleanField(default=False)),
                ('amount', models.PositiveIntegerField()),
                ('donor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.Customer')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
