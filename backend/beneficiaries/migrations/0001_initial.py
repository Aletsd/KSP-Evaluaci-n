# Generated by Django 4.1.3 on 2022-11-30 04:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('employees', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BeneficiaryInformation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_deleted', models.BooleanField(default=False)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('fullname', models.CharField(max_length=100)),
                ('kinship', models.CharField(max_length=100)),
                ('date_birth', models.DateField(blank=True, null=True)),
                ('gender', models.CharField(max_length=100)),
                ('employeeInformation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='beneficiary_information', to='employees.employeeinformation')),
            ],
            options={
                'db_table': 'beneficiary_informations',
            },
        ),
    ]
