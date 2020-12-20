# from .models import Lead
from .serializers import StackSearchapi
from rest_framework import generics
from .serializers import StackSearchapi
from django.http import JsonResponse
import requests
import requests_cache
import json
from ratelimit.decorators import ratelimit
from django.core.paginator import Paginator
import datetime
from django.views.decorators.csrf import csrf_exempt


# class LeadListCreate(generics.ListCreateAPIView):
#     queryset = Lead.objects.all()
#     serializer_class = LeadSerializer
#


requests_cache.install_cache('stackapi_cache', backend='sqlite', expire_after=180)

@csrf_exempt
@ratelimit(key='user_or_ip', rate='5/m')
@ratelimit(key='user_or_ip', rate='100/d')
def stacksearch(request):
    if request.method == "POST":
        result = {}
        page = request.POST['page']
        pagesize = request.POST['pagesize']
        fromdate = request.POST['fromdate']
        todate = request.POST['todate']
        min = request.POST['min']
        order = request.POST['order']
        sort = request.POST['sort']
        q = request.POST['q']
        max = request.POST['max']
        accepted = request.POST['accepted']
        wiki = request.POST['wiki']
        views = request.POST['views']
        url = request.POST['url']
        user = request.POST['user']
        title = request.POST['title']
        tagged = request.POST['tagged']
        nottagged = request.POST['nottagged']
        notice = request.POST['notice']
        migrated = request.POST['migrated']
        closed = request.POST['closed']
        body = request.POST['body']
        answers = request.POST['answers']
        endpoint = 'https://api.stackexchange.com/2.2/search/advanced'
        payload = {"page": page ,
                   "pagesize": pagesize	,
                   "fromdate": fromdate	,
                   "todate": todate,
                   "min": min,
                   "max": max,
                   "order": order,
                   "sort": sort,
                   "q": q,
                   "accepted": accepted,
                   "answers": answers	,
                   "body": body,
                   "closed": closed,
                   "migrated": migrated,
                   "notice": notice,
                   "nottagged": nottagged,
                   "tagged": tagged,
                   "title": title,
                   "user": user,
                   "url": url,
                   "views": views,
                   "wiki": wiki,
                    "site": "stackoverflow",
                }
        response = requests.get(url=endpoint, params=payload)
        print("Time: {0} / Used Cache: {1}".format(datetime.datetime.now(), response.from_cache))

        if response.status_code == 200:  # SUCCESS
            try:
                result = response.json()
                result['success'] = True
            except json.decoder.JSONDecodeError as e:
                print(e)
        else:
            result['success'] = False
            if response.status_code == 404:  # NOT FOUND
                result['message'] = 'No entry found'
            else:
                result['message'] = 'The Stack API is not available at the moment. Please try again later.'

        return JsonResponse(result)
