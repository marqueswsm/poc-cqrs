create table if not exists task (
	id integer primary key,
	name varchar(254) not null,
	description varchar(512) not null
);