# Making Queries

[장고문서](https://docs.djangoproject.com/ko/1.11/topics/db/queries/#retrieving-specific-objects-with-filters) 를 공부하며 기록한 내용입니다. 



```
>>> from blog.models import Blog
>>> b = Blog(name='Beatles Blog', tagline='All the latest Beatles news.')
>>> b.save()
```

> This performs an `INSERT` SQL statement behind the scenes. Django doesn't hit the database until you explicitly call [`save()`](https://docs.djangoproject.com/ko/1.11/ref/models/instances/#django.db.models.Model.save).

안쪽에서는 sql 문이 작동되는데, 장고는 save() method가 실행되기 전까지는 database를 치지 않는다. 



### Creating objects

```
save() takes a number of advanced options not described here. See the documentation for save() for complete details.

To create and save an object in a single step, use the create() method.
```

save() method에는 다양한 옵션이 존재하고, 한번에 save()까지 처리하려면 create() mothod를 사용한다.



### Saving changes to objects

```
To save changes to an object that's already in the database, use save().
```

save() method는 이미 저장된 내용을 변경하는데에도 사용된다. 



### Saving `ForeignKey` and `ManyToManyField` fields

```
Updating a ForeignKey field works exactly the same way as saving a normal field -- simply assign an object of the right type to the field in question. This example updates the blog attribute of an Entry instance entry, assuming appropriate instances of Entry and Blog are already saved to the database (so we can retrieve them below):
```

ForeignKey field의 경우 일반 필드와 같이 업데이트 할 수 있습니다.



```
Updating a ManyToManyField works a little differently -- use the add() method on the field to add a record to the relation. This example adds the Author instance joe to the entry object:

>>> from blog.models import Author
>>> joe = Author.objects.create(name="Joe")
>>> entry.authors.add(joe)
```

ManyToManyField의 경우 약간 다르게 작동합니다. add()라는 method를 사용합니다. 예시의 경우 joe라는 Author객체를 만들고 entry와 author의 관계를 add() method를 생성합니다. 



```
To add multiple records to a ManyToManyField in one go, include multiple arguments in the call to add(), like this:

>>> john = Author.objects.create(name="John")
>>> paul = Author.objects.create(name="Paul")
>>> george = Author.objects.create(name="George")
>>> ringo = Author.objects.create(name="Ringo")
>>> entry.authors.add(john, paul, george, ringo)
```

한번에 여러개의 데이터를 ManyToMany 관계에 추가하려고 할 때에, 한번에 속성을 여러개 적용할 수 있습니다.



### Retrieving objects

```
To retrieve objects from your database, construct a QuerySet via a Manager on your model class.

A QuerySet represents a collection of objects from your database. It can have zero, one or many filters. Filters narrow down the query results based on the given parameters. In SQL terms, a QuerySet equates to a SELECT statement, and a filter is a limiting clause such as WHERE or LIMIT.

You get a QuerySet by using your model's Manager. Each model has at least one Manager, and it's called objects by default. Access it directly via the model class, like so:

>>> Blog.objects
<django.db.models.manager.Manager object at ...>
>>> b = Blog(name='Foo', tagline='Bar')
>>> b.objects
Traceback:
    ...
AttributeError: "Manager isn't accessible via Blog instances."
```

데이터베이스에서 객체를 꺼내려 할 때 당신의 모델 클래스의 매니저를 통해 쿼리셋을 구성해야 합니다.

하나의 쿼리셋은 당신의 데이터베스로부터 나온 객체의 모음을 의미합니다.  해당 쿼리셋은 0개 혹은 다수의 filter를 포함할 수 있습니다. filter는 주어진 매개변수에 기반하여 쿼리 결과물의 범위를 좁게할 수 있습니다. SQL문 에서 쿼리셋은 SELECT문과 같고, filter는 WHERE 또는 LIMIT와 같이 조건절 입니다.

당신은 모델매니저를 사용함으로써 쿼리셋을 만들 수 있습니다. 각각의 모델은 적어도 하나 이상의 Manager를 가지며, 기본값으로 objects로 주어집니다. 예시와 같이 모델클래스를 통해서 바로 불러올 수 있습니다.



### Retrieving specific objects with filters

```
For example, to get a QuerySet of blog entries from the year 2006, use filter() like so:

Entry.objects.filter(pub_date__year=2006)

With the default manager class, it is the same as:

Entry.objects.all().filter(pub_date__year=2006)
```

filter() 사용에 있어서 예시로 나온 2가지는 같은 방식이다.



#### Chaining filters

```
The result of refining a QuerySet is itself a QuerySet, so it's possible to chain refinements together. For example:

>>> Entry.objects.filter(
...     headline__startswith='What'
... ).exclude(
...     pub_date__gte=datetime.date.today()
... ).filter(
...     pub_date__gte=datetime.date(2005, 1, 30)
... )

This takes the initial QuerySet of all entries in the database, adds a filter, then an exclusion, then another filter. The final result is a QuerySet containing all entries with a headline that starts with "What", that were published between January 30, 2005, and the current day.
```

쿼리셋을 걸러낸 결과는 여전히 쿼리셋이므로 해당 쿼리셋을 다시 여러번 연결하여 걸러낼 수 있다. 

예시에서 나온 쿼리셋은 데이터베이스에서 모든 엔트리를 가져온다. 그리고나서 filter를 추가하고 난후에 exclusion을 적용하고, 마지막으로 다시 filter를 적용한다. 결과적으로 쿼리셋은 'What'으로 시작하고, pub date가 2005년 1월 30일 부터 오늘미만의 객체를 가지고 있게 된다. 



#### Filtered QuerySets are unique

```
Each time you refine a QuerySet, you get a brand-new QuerySet that is in no way bound to the previous QuerySet. Each refinement creates a separate and distinct QuerySet that can be stored, used and reused.
```

쿼리셋을 걸러낼 때 마다 당시는 새로운 쿼리셋을 얻게 되며 그 쿼리셋은 이전 쿼리셋에 영향을 주지 않는다. 각각의 걸러내는 과정은 저장될 수 있고 재사용 될 수 있는 분리된 고유의 쿼리셋이다. 



#### QuerySets are lazy

```
QuerySets are lazy -- the act of creating a QuerySet doesn't involve any database activity. You can stack filters together all day long, and Django won't actually run the query until the QuerySet is evaluated. Take a look at this example:

>>> q = Entry.objects.filter(headline__startswith="What")
>>> q = q.filter(pub_date__lte=datetime.date.today())
>>> q = q.exclude(body_text__icontains="food")
>>> print(q)

Though this looks like three database hits, in fact it hits the database only once, at the last line (print(q)). In general, the results of a QuerySet aren't fetched from the database until you "ask" for them. When you do, the QuerySet is evaluated by accessing the database. For more details on exactly when evaluation takes place, see When QuerySets are evaluated.
```

쿼리셋은 자주 작동 되지 않습니다 --쿼리셋을 생성하는 것이 데이터베이스의 작동을 포함하지 않는다는 말 입니다. 당신은 filter를 하루종일 쌓아나갈 수 있으며 장고는 쿼리가 평가되기 전까지는 데이터베이스를 작동시키지 않을 것 입니다. 

예시에서는 마치 데이터베이스를 3번 친 것 처럼 보이지만, 사실 마지막 라인에서 한번 쳤으며(print(q)). 일반적으로 쿼리셋의 결과는 당신이 요청하기 전까지 데이터베이스에서 데이터를 가져오지 않습니다.  당신이 요청을 할때 쿼리셋은 평가되며 데이터베이스에 접근하게 됩니다. 

아래의 예시와 같이 쿼리가 작동했는지 여부를 확인할 수 있다. [출처 stackoverflow](https://stackoverflow.com/questions/20171736/when-is-a-django-queryset-evaluated)

```
>>> from django.contrib.auth.models import *
>>> from django.db import connection
>>> connection.queries
[]
>>> query = User.objects.filter(pk=1)
>>> connection.queries
[]
>>> query.exists()
True
>>> connection.queries
[{u'time': u'0.000', u'sql': u'SELECT (1) AS `a` FROM `auth_user` WHERE `auth_user`.`id` = 1  LIMIT 1'}]
>>> query.get()
<User: root>
>>> connection.queries
[{u'time': u'0.000', u'sql': u'SELECT (1) AS `a` FROM `auth_user` WHERE `auth_user`.`id` = 1  LIMIT 1'}, 
 {u'time': u'0.000', u'sql': u'SELECT `auth_user`.`id`, `auth_user`.`password`, `auth_user`.`last_login`, `auth_user`.`is_superuser`, `auth_user`.`username`, `auth_user`.`first_name`, `auth_user`.`last_name`, `auth_user`.`email`, `auth_user`.`is_staff`, `auth_user`.`is_active`, `auth_user`.`date_joined` FROM `auth_user` WHERE `auth_user`.`id` = 1 '}]
>>> 
```

구글에서 찾은 효과적인 쿼리셋 사용법 블로그글 [참조: Using Django querysets effectively](http://blog.etianen.com/blog/2013/06/08/django-querysets/)

