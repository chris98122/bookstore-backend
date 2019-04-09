<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<sql:query var="rs" dataSource="jdbc/bookstore">
  select * from book
</sql:query>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" type="text/css" href="./static/css/initial.css">
	<link rel="stylesheet" type="text/css" href="./static/css/bar.css">
	<link rel="stylesheet" type="text/css" href="./static/css/browse_book.css">
<title>bookstore</title>
</head>
<body>
<body style="padding-bottom: 82px">
<div class="bar_border">
	<ul class = "bar">
		<li>
			<a href="./index.html">回到主页</a>
		</li>
	</ul>
</div>

<div class="browse_border">
	<div class="browse_border">
		<ul class="browse_title" >
			<li class="f2">书名</li>
			<li class="f3">作者</li>
			<li class="f4">库存</li>
			<li class="f5">ISBN</li>
			<li class="f6">加入购物车</li>
		</ul>
		<table class="book_list">
			<tbody>
			<c:forEach var="row" items="${rs.rows}">
			<tr>

					<td class="row_name">
						<div class="name">
					${row.name}</div>
					</td>
					<td class="row3">

					${row.author}
					</td>
					<td data-minbuy="0" class="fn-count-tip row4 ">
                            <span class="amount fn-updatecount " data-value="3">
                            <p>
					${row.stock}</p>
					<td class="row5">
					<span >
					${row.ISBN}</span>
					<td class="row6">
						<button>加入购物车</button>
					</td>

			</tr>

			</c:forEach>
			</tbody>
		</table>
	</div>


	<div class="next">
		<a id="next_page" href="">下一页</a>
	</div>
</body>

</body>
</html>
