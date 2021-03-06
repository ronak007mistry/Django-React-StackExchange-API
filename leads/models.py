from django.db import models

class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name


class Stackapi(models.Model):
    page = models.IntegerField()
    pagesize = models.IntegerField()
    fromdate = models.DateField()
    todate = models.DateField()
    min = models.DateField()
    max = models.DateField()
    sort = models.CharField(max_length=999)
    order = models.CharField(max_length=999)
    q = models.CharField(max_length=999)
    accepted = models.CharField(max_length=999)
    answers = models.IntegerField()
    body = models.CharField(max_length=999)
    closed = models.CharField(max_length=999)
    migrated = models.CharField(max_length=999)
    notice = models.CharField(max_length=999)
    nottagged = models.CharField(max_length=999)
    tagged = models.CharField(max_length=999)
    title = models.CharField(max_length=999)
    user = models.IntegerField()
    url = models.CharField(max_length=999)
    views = models.IntegerField()
    wiki = models.CharField(max_length=999)
