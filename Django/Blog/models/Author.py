from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=70)

    def __str__(self):
        return "{}".format(self.name)
