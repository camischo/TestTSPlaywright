create database gimnasio;

use gimnasio;

create table cliente(
id int auto_increment not null,
nombre 	varchar(100) not null,
apellidos varchar(100) not null,
ciudad varchar(100) not null,
primary key(id)
);

create table sucursal(
id int auto_increment not null,
nombre 	varchar(100) not null,
ciudad varchar(100) not null,
primary key(id)
);

create table producto(
id int auto_increment not null,
nombre 	varchar(100) not null,
tipoProducto varchar(100) not null,
primary key(id)
);

create table inscripcion(
idProducto int,
idCliente int,
foreign key(idProducto) references producto(id),
foreign key(idCliente) references cliente(id)
);

create table disponibilidad(
idSucursal int,
idProducto int,
foreign key (idSucursal) references sucursal(id),
foreign key (idProducto)  references producto(id)
);

create table visitan (
idSucursal int,
idCliente int,
fechaVisita timestamp default current_timestamp ,
foreign key(idSucursal) references  sucursal(id),
foreign key (idCliente) references  cliente(id)
);


insert into cliente values (null,'Christian Camilo','Schottlaender Castro', 'Bogota');
insert into cliente values (null,'Carolina','Rincon Rodriguez', 'Bogota');
insert into cliente values (null,'Ihan','Perez Toloza', 'Bogota');
insert into cliente values (null,'Keileth','Maritnez Colorado', 'Bogota');
insert into cliente values (null,'Luz Angela','Aleman Torres', 'Bogota');
insert into cliente values (null,'Cecilia','Mora Mendez', 'Bogota');
insert into cliente values (null,'Marcos','Perez Perez', 'Bogota');
insert into cliente values (null,'Juana Maria','Suarez Cano', 'Bogota');
insert into cliente values (null,'Marina','Sanez', 'Bogota');
insert into cliente values (null,'Luz Dary','Sanez', 'Bogota');

insert into sucursal values (null, 'Calle 31', 'Bogota');
insert into sucursal values (null, 'San Martin', 'Medellin');
insert into sucursal values (null, 'La Soledad', 'Bogota');
insert into sucursal values (null, 'Monserrate', 'Bogota');
insert into sucursal values (null, 'Calima', 'Bogota');
insert into sucursal values (null, 'Exito Madrigal', 'Bogota');
insert into sucursal values (null, 'El peñon', 'Medellin');
insert into sucursal values (null, 'Centro Internacional', 'Bogota');
insert into sucursal values (null, 'Chapinero', 'Bogota');
insert into sucursal values (null, 'Polo', 'Bogota');

insert into producto values(null, 'Pesas', 'Indumentaria');
insert into producto values(null, 'Mancuernas', 'Indumentaria');
insert into producto values(null, 'Pechera', 'Accesorio');
insert into producto values(null, 'Brasalete', 'Accesorio');
insert into producto values(null, 'Reloj Saludable', 'Accesorio');
insert into producto values(null, 'Piscina', 'Macro');
insert into producto values(null, 'Caminadora', 'Indumentaria');
insert into producto values(null, 'Eliptica', 'Indumentaria');
insert into producto values(null, 'Agua', 'Comida');
insert into producto values(null, 'Energisante', 'Comida');

insert into inscripcion values(1,2);
insert into inscripcion values(2,2);
insert into inscripcion values(2,8);
insert into inscripcion values(2,9);
insert into inscripcion values(3,1);
insert into inscripcion values(3,6);
insert into inscripcion values(3,5);
insert into inscripcion values(3,10);
insert into inscripcion values(7,7);
insert into inscripcion values(8,4);
insert into inscripcion values(8,7);
insert into inscripcion values(8,9);

insert into disponibilidad values(1,1);
insert into disponibilidad values(1,2);
insert into disponibilidad values(1,3);
insert into disponibilidad values(1,4);
insert into disponibilidad values(4,1);
insert into disponibilidad values(5,4);
insert into disponibilidad values(2,2);
insert into disponibilidad values(2,1);
insert into disponibilidad values(6,1);
insert into disponibilidad values(7,1);
insert into disponibilidad values(8,1);
insert into disponibilidad values(9,1);
insert into disponibilidad values(10,1);
insert into disponibilidad values(6,3);

insert into visitan values (1,2,current_timestamp );
insert into visitan values (2,1,current_timestamp );
insert into visitan values (4,6,current_timestamp );
insert into visitan values (6,4,current_timestamp );
insert into visitan values (7,2,current_timestamp );
insert into visitan values (2,7,current_timestamp );
insert into visitan values (8,3,current_timestamp );
insert into visitan values (3,8,current_timestamp );
insert into visitan values (10,6,current_timestamp );
insert into visitan values (5,10,current_timestamp );
insert into visitan values (2,8,current_timestamp );
insert into visitan values (6,2,current_timestamp );


-- Query 1: Listar nombre completo de clientes que han visitado la sucursal "Sucursal Norte" en el último mes.
select c.nombre , c.apellidos
from cliente c 
inner join visitan v on c.id = v.idCliente
inner join sucursal s on s.id = v.idSucursal
where s.nombre = 'San Martin';

-- Query 2: Mostrar cuántos clientes distintos han visitado cada sucursal, ordenado por cantidad de visitas descendente.
select count(distinct c.id) cantidad, s.nombre
from cliente c 
inner join visitan v on c.id = v.idCliente
inner join sucursal s on s.id = v.idSucursal
group by s.nombre;

-- Query 3: Encontrar productos que están disponibles en la sucursal de ciudad "Medellín" pero NO en la sucursal de ciudad "Bogotá".
select p.nombre, s.ciudad
from producto p 
inner join disponibilidad d  on d.idProducto  =  p.id
inner join sucursal s on d.idSucursal = s.id
where s.ciudad = 'Medellin';

-- Query 4: Listar los clientes (nombre, apellido) que están inscritos en más de 2 productos, mostrando la cantidad de productos.
select nombre , apellidos, cantidad from (
select c.nombre, c.apellidos , count(1)cantidad
from cliente c 
inner join inscripcion i on c.id = i.idCliente
inner join producto p on p.id = i.idProducto
group by c.id
) t where cantidad > 1

-- Query 5: Para cada cliente, mostrar su última visita (fecha más reciente) y a qué sucursal fue. Si no ha visitado, mostrar "Sin visitas".
select c.nombre, c.apellidos, coalesce( s.nombre  ,'Sin visitas') sucursal, coalesce( max(v.fechaVisita) ,'Sin visitas') fecha
from cliente c 
left outer join visitan v on c.id = v.idCliente
left outer join sucursal s on s.id = v.idSucursal
group by c.nombre, c.apellidos


