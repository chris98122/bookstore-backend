
-- //出版社，出版时间，第几版，简介，作者简介 待添加

drop table if exists order_content;
drop table if exists orders;
drop table if exists book;
drop table if exists user;
create table book
	(ID 		int NOT NULL AUTO_INCREMENT,
	 name		varchar(20) not null, 
	 author		varchar(20), 
	 stock		int NOT NULL,
	 price		numeric(5,2),
	 ISBN		varchar(20),
     detail  text,
	 primary key (ID)
);

insert into book values (0,'Ajax', 'author1', 8 , 8, '9787101003748','this is detail for ajax');
insert into book values (0,'python','author2', 38, 28, '9787101093048','this is detail for python');
insert into book values (0,'mysql', 'author3', 28, 38, '9787101073048','this is detail for mysql');

insert into book values (0,'php', 'author4', 8 , 8, '9787101003058','this is detail for php');
insert into book values (0,'perl','author5', 38, 28, '9787101003448','this is detail for perl');
insert into book values (0,'oracle', 'author6', 28, 38, '9787101203048','this is detail for oracle');

insert into book values (0,'css', 'author7', 2 , 8, '9787101003028','this is detail for css');
insert into book values (0,'c++','author8', 4, 28, '9787101003058','this is detail for c++');
insert into book values (0,'java', 'author9', 6, 38, '9787101043048','this is detail for java');


create table user
	(ID 		int NOT NULL AUTO_INCREMENT,
	 name		varchar(10), 
	 password  varchar(20), 
	 email  	varchar(20), 
	 is_active	tinyint(1),
	 primary key (ID)
	);
insert into user values (0, 'root', '963214785','',1);
insert into user values ( 0,'user_one', 'user_oneuser_one','uesr_one@126.com',1);


create table orders
	(ID 		int NOT NULL AUTO_INCREMENT,
	 u_ID		int not null,
	 buydate 		datetime,
	 tot_price 	numeric(5,2),
	 is_cart	tinyint(1),
	 primary key (ID),
	 foreign key (u_ID) references user(ID)
	 on delete cascade
	);

insert into orders values (0,2,  '2018-12-31 23:59:59',138,0);
insert into orders values (0,2, now(),0,1);
insert into orders values (0,2,  '2019-2-3 23:59:59',138,0);

insert into orders values (0,2,  '2019-2-6 23:59:59',138,0);



create table order_content
	(ID 		int NOT NULL AUTO_INCREMENT,
	o_ID	    int,
	b_ID		int NOT NULL,
	b_num 		numeric(5,0),
	primary key (ID),
  	foreign key (o_ID) references orders(ID),
	foreign key (b_ID) references book(ID)
	);

insert into order_content values ( 1,1,1,2);
insert into order_content values ( 2,1,2,3);
insert into order_content values ( 3,1,3,1);

insert into order_content values ( 4,2,1,2);
insert into order_content values ( 5,2,2,3);
insert into order_content values ( 6,2,3,1);

insert into order_content values ( 7,3,1,2);
insert into order_content values ( 8,3,2,3);
insert into order_content values ( 9,3,3,1);

insert into order_content values ( 10,4,1,2);
insert into order_content values ( 11,4,2,3);
insert into order_content values ( 12,4,3,1);
