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

> save() takes a number of advanced options not described here. See the documentation for save() for complete details.
>
> To create and save an object in a single step, use the create() method.

save() method에는 다양한 옵션이 존재하고, 한번에 save()까지 처리하려면 create() mothod를 사용한다.



### Saving changes to objects

> To save changes to an object that's already in the database, use save().

save() method는 이미 저장된 내용을 변경하는데에도 사용된다. 



### Saving `ForeignKey` and `ManyToManyField` fields

> Updating a ForeignKey field works exactly the same way as saving a normal field -- simply assign an object of the right type to the field in question. This example updates the blog attribute of an Entry instance entry, assuming appropriate instances of Entry and Blog are already saved to the database (so we can retrieve them below):

ForeignKey field의 경우 일반 필드와 같이 업데이트 할 수 있습니다.



> Updating a ManyToManyField works a little differently -- use the add() method on the field to add a record to the relation. This example adds the Author instance joe to the entry object:

```
>>> from blog.models import Author
>>> joe = Author.objects.create(name="Joe")
>>> entry.authors.add(joe)
```

ManyToManyField의 경우 약간 다르게 작동합니다. add()라는 method를 사용합니다. 예시의 경우 joe라는 Author객체를 만들고 entry와 author의 관계를 add() method를 생성합니다. 



> To add multiple records to a ManyToManyField in one go, include multiple arguments in the call to add(), like this:

```
>>> john = Author.objects.create(name="John")
>>> paul = Author.objects.create(name="Paul")
>>> george = Author.objects.create(name="George")
>>> ringo = Author.objects.create(name="Ringo")
>>> entry.authors.add(john, paul, george, ringo)
```

한번에 여러개의 데이터를 ManyToMany 관계에 추가하려고 할 때에, 한번에 속성을 여러개 적용할 수 있습니다.



### Retrieving objects

> To retrieve objects from your database, construct a QuerySet via a Manager on your model class.
>
> A QuerySet represents a collection of objects from your database. It can have zero, one or many filters. Filters narrow down the query results based on the given parameters. In SQL terms, a QuerySet equates to a SELECT statement, and a filter is a limiting clause such as WHERE or LIMIT.
>
> You get a QuerySet by using your model's Manager. Each model has at least one Manager, and it's called objects by default. Access it directly via the model class, like so:

```
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

> For example, to get a QuerySet of blog entries from the year 2006, use filter() like so:

```
Entry.objects.filter(pub_date__year=2006)
```

> With the default manager class, it is the same as:

```
Entry.objects.all().filter(pub_date__year=2006)
```

filter() 사용에 있어서 예시로 나온 2가지는 같은 방식이다.



#### Chaining filters

> The result of refining a QuerySet is itself a QuerySet, so it's possible to chain refinements together. For example:

```
>>> Entry.objects.filter(
...     headline__startswith='What'
... ).exclude(
...     pub_date__gte=datetime.date.today()
... ).filter(
...     pub_date__gte=datetime.date(2005, 1, 30)
... )
```

> This takes the initial QuerySet of all entries in the database, adds a filter, then an exclusion, then another filter. The final result is a QuerySet containing all entries with a headline that starts with "What", that were published between January 30, 2005, and the current day.

쿼리셋을 걸러낸 결과는 여전히 쿼리셋이므로 해당 쿼리셋을 다시 여러번 연결하여 걸러낼 수 있다. 

예시에서 나온 쿼리셋은 데이터베이스에서 모든 엔트리를 가져온다. 그리고나서 filter를 추가하고 난후에 exclusion을 적용하고, 마지막으로 다시 filter를 적용한다. 결과적으로 쿼리셋은 'What'으로 시작하고, pub date가 2005년 1월 30일 부터 오늘미만의 객체를 가지고 있게 된다. 



#### Filtered QuerySets are unique

> Each time you refine a QuerySet, you get a brand-new QuerySet that is in no way bound to the previous QuerySet. Each refinement creates a separate and distinct QuerySet that can be stored, used and reused.

쿼리셋을 걸러낼 때 마다 당시는 새로운 쿼리셋을 얻게 되며 그 쿼리셋은 이전 쿼리셋에 영향을 주지 않는다. 각각의 걸러내는 과정은 저장될 수 있고 재사용 될 수 있는 분리된 고유의 쿼리셋이다. 



#### QuerySets are lazy

> QuerySets are lazy -- the act of creating a QuerySet doesn't involve any database activity. You can stack filters together all day long, and Django won't actually run the query until the QuerySet is evaluated. Take a look at this example:

```
>>> q = Entry.objects.filter(headline__startswith="What")
>>> q = q.filter(pub_date__lte=datetime.date.today())
>>> q = q.exclude(body_text__icontains="food")
>>> print(q)
```

> Though this looks like three database hits, in fact it hits the database only once, at the last line (print(q)). In general, the results of a QuerySet aren't fetched from the database until you "ask" for them. When you do, the QuerySet is evaluated by accessing the database. For more details on exactly when evaluation takes place, see When QuerySets are evaluated.

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



#### Limiting QuerySets

> Use a subset of Python's array-slicing syntax to limit your [`QuerySet`](https://docs.djangoproject.com/ko/1.11/ref/models/querysets/#django.db.models.query.QuerySet) to a certain number of results. This is the equivalent of SQL's `LIMIT` and `OFFSET` clauses.

파이썬 slicing 문법의 subset을 활용하여 당신의 쿼리셋의 결과의 갯수를 제한 할 수 있다. 

```
>>> Entry.objects.all()[:5]
```

위의 예시는 처음부터 5개의 객체만 리턴한다.

```
>>> Entry.objects.all()[5:10]
```

위의 예시는 6번째 객체부터 10번째 까지 리턴한다.

> Negative indexing (i.e. `Entry.objects.all()[-1]`) is not supported.

마이너스(-) 슬라이스는 지원하지 않는다.

> Generally, slicing a [`QuerySet`](https://docs.djangoproject.com/ko/1.11/ref/models/querysets/#django.db.models.query.QuerySet) returns a new [`QuerySet`](https://docs.djangoproject.com/ko/1.11/ref/models/querysets/#django.db.models.query.QuerySet) -- it doesn't evaluate the query. An exception is if you use the "step" parameter of Python slice syntax. For example, this would actually execute the query in order to return a list of every *second* object of the first 10:
>
> ```
> >>> Entry.objects.all()[:10:2]
> ```

일반적으로 쿼리셋을 슬라이싱 하면 새로운 쿼리셋을 반환한다. 이것은 쿼리를 평가하지 않는다. 만약 당신이 파이썬 슬라이싱문법의 'step'파라미터를 사용할 경우 에러가 발생한다. 



#### Field lookups

> Field lookups are how you specify the meat of an SQL `WHERE` clause. They're specified as keyword arguments to the [`QuerySet`](https://docs.djangoproject.com/ko/1.11/ref/models/querysets/#django.db.models.query.QuerySet) methods [`filter()`](https://docs.djangoproject.com/ko/1.11/ref/models/querysets/#django.db.models.query.QuerySet.filter), [`exclude()`](https://docs.djangoproject.com/ko/1.11/ref/models/querysets/#django.db.models.query.QuerySet.exclude) and [`get()`](https://docs.djangoproject.com/ko/1.11/ref/models/querysets/#django.db.models.query.QuerySet.get).
>
> Basic lookups keyword arguments take the form `field__lookuptype=value`. (That's a double-underscore). For example:
>
> ```
> >>> Entry.objects.filter(pub_date__lte='2006-01-01')
> ```
>
> translates (roughly) into the following SQL:
>
> ```
> SELECT * FROM blog_entry WHERE pub_date <= '2006-01-01';
> ```

Field lookup은 SQL문의 WHERE절을의 가장 중요한 부분을 정의 하는 방법입니다. 이것들은 filter, exclude, get 과같은 쿼리셋 메소드의 특정 키워드의 인수로 지정되어 있습니다.

> The field specified in a lookup has to be the name of a model field. There's one exception though, in case of a [`ForeignKey`](https://docs.djangoproject.com/ko/1.11/ref/models/fields/#django.db.models.ForeignKey) you can specify the field name suffixed with `_id`. In this case, the value parameter is expected to contain the raw value of the foreign model's primary key. For example:
>
> ```
> >>> Entry.objects.filter(blog_id=4)
> ```

검색에 사용되는 필드는 반드시 모델의 필드이름으로 지정되어야 합니다. 하지만 예외가 한가지 있는데 `ForeignKey`의 경우 입니다. 필드네임 뒤에 `_id`를 붙여서 사용해야 합니다. 파라미터 값은 foreign 모델의 프라이머리 키값이 주어져야만 합니다. 

exact

> If you don't provide a lookup type -- that is, if your keyword argument doesn't contain a double underscore -- the lookup type is assumed to be `exact`.
>
> For example, the following two statements are equivalent:
>
> ```
> >>> Blog.objects.get(id__exact=14)  # Explicit form
> >>> Blog.objects.get(id=14)         # __exact is implied
> ```

만약 검색 타입을 지정하지 않았다면 (그것은 당신의 키워드 인자가 더블언더스코어를 가지지 않았다는 말입니다.) 검색타입은 exact로 가정하고 작동합니다.

iexact

> A case-insensitive match. So, the query:
>
> ```
> >>> Blog.objects.get(name__iexact="beatles blog")
> ```
>
> Would match a `Blog` titled `"Beatles Blog"`, `"beatles blog"`, or even `"BeAtlES blOG"`.

contains

> Case-sensitive containment test. For example:
>
> ```
> Entry.objects.get(headline__contains='Lennon')
> ```
>
> Roughly translates to this SQL:
>
> ```
> SELECT ... WHERE headline LIKE '%Lennon%';
> ```
>
> Note this will match the headline `'Today Lennon honored'` but not `'today lennonhonored'`.
>
> There's also a case-insensitive version, [`icontains`](https://docs.djangoproject.com/ko/1.11/ref/models/querysets/#std:fieldlookup-icontains).



#### Lookups that span relationships

> Django offers a powerful and intuitive way to "follow" relationships in lookups, taking care of the SQL `JOIN`s for you automatically, behind the scenes. To span a relationship, just use the field name of related fields across models, separated by double underscores, until you get to the field you want.
>
> This example retrieves all `Entry` objects with a `Blog` whose `name` is `'Beatles Blog'`:
>
> ```
> >>> Entry.objects.filter(blog__name='Beatles Blog')
> ```

장고는 강력하고 직관적인 방법으로 관계간의 쿼리검색을 제공합니다. 내부적으로는 SQL JOIN문을 자동으로 작동시킵니다. 연관된 관계를 검색하기 위해서 두 개의 언더스코어로 구분된 해당 모델과 연결된 필드의 이름을 사용하면 됩니다. 

예시에서는 연결된 블로그 모델의 name 필드가 'Beatles Blog' 인 Entry 쿼리셋을 반환합니다.

> This spanning can be as deep as you'd like.
>
> It works backwards, too. To refer to a "reverse" relationship, just use the lowercase name of the model.
>
> This example retrieves all `Blog` objects which have at least one `Entry` whose `headline` contains `'Lennon'`:
>
> ```
> >>> Blog.objects.filter(entry__headline__contains='Lennon')
> ```

확장된 관계 검색은 당신이 원하는 단계가 깊어질 수 있습니다. 

역참조 또한 가능합니다. 단지 역관계로 이어진 해당 모델의 소문자를 사용하면 됩니다. 

> If you are filtering across multiple relationships and one of the intermediate models doesn't have a value that meets the filter condition, Django will treat it as if there is an empty (all values are `NULL`), but valid, object there. All this means is that no error will be raised. For example, in this filter:
>
> ```
> Blog.objects.filter(entry__authors__name='Lennon')
> ```
>
> (if there was a related `Author` model), if there was no `author` associated with an entry, it would be treated as if there was also no `name` attached, rather than raising an error because of the missing `author`. Usually this is exactly what you want to have happen. The only case where it might be confusing is if you are using [`isnull`](https://docs.djangoproject.com/ko/1.11/ref/models/querysets/#std:fieldlookup-isnull). 

만약 여러관계로 이어진 모델에서 필터링 할 경우, 그리고 중간모델 중 하나가 필터에서 지정한 조건을 만족하지 못하는 경우 장고는 유효한 NULL값으로 간주한다. 이것은 여러관계를 걸쳐서 검색을 할 경우에 조건을 만족시키는 값이 없다 하더라도 장고는 에러를 일으키지 않는다는 것을 의미한다. 

만약 entry와 관계된 author가 없다면, 그것은 해당 이름이 없다는 것으로 간주되며 일반적으로 이해되는 상황이다. 헷갈릴 수 있는 한가지 경우는 isnull을 사용할 때다. 

> ```
> Blog.objects.filter(entry__authors__name__isnull=True)
> ```
>
> will return `Blog` objects that have an empty `name` on the `author` and also those which have an empty `author` on the `entry`. If you don't want those latter objects, you could write:
>
> ```
> Blog.objects.filter(entry__authors__isnull=False, entry__authors__name__isnull=True)
> ```

예시에서는 연결된 author의 name이 빈 값인 entry와 연결된 blog를 반환한다.만약 이러한 결과를 원하지 않는 것이라면 아래와 같이 사용하면 된다.



#### Spanning multi-valued relationships

[posting]({% post_url /posts/2018-01-24-Django_Spanning multi-valued relationships %}) 내용으로 대체



#### Filters can reference fields on the model