from django.db import models

class ButtonCall(models.Model):
    name = models.CharField(max_length=255)
    button = models.CharField(max_length=255)
    count = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.name} - {self.button} ({self.count} calls)"
