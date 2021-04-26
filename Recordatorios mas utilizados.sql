--------------- MYSQL-------------------------------------------------------------------

CREATE USER 'nombre_usuario'@'localhost' IDENTIFIED BY 'tu_contrasena';
GRANT ALL PRIVILEGES ON * . * TO 'nombre_usuario'@'localhost';

Restaurar base de datos

mysql  --protocol=tcp --host=localhost --user=root --password --port=3306 --default-character-set=utf8 --comments  < "/home/asira/shared/DUMP 161610.SQL"

 ---------------MONGODB-------------------------------------------------------------------

Actualiza o crea un valor en una tabla destino los valores los saca del recorrido del forEach (Ejecutar un bucle sobre el resultado de una busqueda)
db.expert.find().forEach(function(experts) {
    db.expert.update({_id: experts._id}, {$set: {date_created: experts.date_updated}})
});
   


Ejemplo de consulta de agregacion con match y project

db.getCollection('expert').aggregate( [
{
  $match: {"ref_profile" : ObjectId("54f4ab3946fe42976914315e")}
},
{
    $project:
       {   ref_profile:1,
           hora: {
              0: {'$year': '$date_updated'},
              1: {'$month': '$date_updated'}

            }
       }
   },
 {
  $group:
  {
    _id:
      {hora:'$hora',
      profile:'$ref_profile'},
    count:{$sum:1}

  }
 },
 {$sort:
     {ref_profile:1
     }
 }
])

Segundo ejemplo de aggregate con  limit y sort de varias columnas, el ISODate() se debe usar en robomongo pero en mongoose solo Date()

    self.aggregate([
        {
            $match: {date_created: {$gte: new ISODate('2015-09-01'), $lt: new ISODate('2015-10-01')}}
        },
        {
            $project:
                {
                    title:1
                }
        },
        {
            $group:
                {
                    _id:{title:"$title"},
                    count:{$sum:1}

                }
        },
        {
            $sort: {count:-1,"_id":1}
        },
        {
            $limit:10
        }

    ]


Buscar valores numericos mas grandes que operador $gt y definir que columnas serán las q se muestren

db.people.find(
  {
    age:{$gt:30}
  },
  {
    name:1,
    age:1
  }
);

Buscar valores numericos mas grandes o iguales que "operador $gte" y definir que columnas serán las q se muestren

db.people.find(
  {
    age:{$gte:30}
  },
  {
    name:1,
    age:1
  }
);

menor que operador $lt
menor o igual que operador $lte
diferente de operador $ne

Extraer ciertos valores operador $in:
db.people.find(
  {
    age:{$in:[25,30,35]}
  },
  {
    name:1,
    age:1
  }
);


Buscar en unca coleccion cuyos documentos tengan determinado campo operador $exists:true, en caso de querer buscar los que no existan se setea a false.
El segundo parametro corresponde a las columnas q se desean mostrar

db.people.find(
  {
    company:{$exists:true}
  },
  {
    name:1,
    age:1,
    company:1
  }
);

Buscar aplicando un criterio or
db.people.find(
  { $or:
     [
       {gender:"female"},
       {age:{$gt:20}}
     ]
  },
  {
    name:1,
    gender:1,
    age:1
  }
);


Buscar fechas por rango
	{"fecha":{ $gte: ISODate('2019-06-24T00:00:00'), $lt:ISODate('2019-06-24T23:59:59') }}

Buscar con and, in por mes
	{ $and: [ { "nombre": { $in :["RGT Cycling - Cap Formentor"] } }, { $expr: {$eq: [{ $month: "$fecha" }, 7]}}] }

Buscar por expresion regular
	{ $where: "/^22.*/.test(this.distancia)" }
	{ nombre: { $regex: /.*cap.*/i } }


Actualizar un registro
	db.segmento_historials.updateOne({ _id: ObjectId('5f0e3ebf34c71b6f1060bc4d') },  {$set:{tipo_segmento:0}});

Actualizar todos los registros de una coleccion
	db.segmento_historials.updateMany({ },  {$set:{tipo_segmento:0}});


$unwind funcion de agregacion 
	Desnormaliza un array que este contenido dentro de un objeto y creo un objecto unico junto con cada item del array desnormalizado
	{ $unwind: "$hidden_efforts" }

Ejemplo:
	const weekActivity = await WeekActivity.aggregate([ { "$match": {"weekly_scores.activities.id":{"$in":[Number(idActivity) ]}}}, { "$unwind": "$weekly_scores" }, { "$unwind": "$weekly_scores.activities" }, { "$match":{"weekly_scores.activities.id":{"$in":[Number(idActivity) ]}}}]).exec();





Crear usuario admin 
	db.createUser(
	  {
	    user: "admin",
	    pwd: "password",
	    roles: [ { role: "root", db: "admin" } ]
	  }
	); 
	y luego salir con exit; y volverse a loguear entonces:


Usar perfil de administrador
	use admin
	db.auth('admin','password');


Error al exceder la capacidad para hacer un sort cuando no hay indices
https://developerslogblog.wordpress.com/2019/11/27/mongodb-sort-how-to-fix-maximum-ram-exceeded-error/	
	db.runCommand( { getParameter : 1, "internalQueryExecMaxBlockingSortBytes" : 1 } )
	db.adminCommand({setParameter: 1, internalQueryExecMaxBlockingSortBytes: 335544320})
	
	
backup 
	mongodump --host=localhost --port=27017 --db=stravali --forceTableScan

Restore 
	mongorestore --host=localhost --port=27017 <path to the backup>


Restaurar las bases de datos de kibernum y Fch

/**
 * Import from prod to dev databases:
 *
 * db.copyDatabase(source,destiny,ip server,db user,db pass)
 *
 * FCh
 * db.copyDatabase('holafch','holafch','hola.fch.cl','holadb','fundacion2015')
 *
 * Kibernum (testing)
 * db.copyDatabase('hola_kibernum','hola_kibernum','104.197.5.77','hola_user_kibernum','$T3-verdEByeBie-kibernum')
 * Kibernum (prod)
 *
 * db.copyDatabase('hola_kibernum','hola_kibernum','ds041223-a0.mongolab.com:41223','holakibernum_user','8ecc876a57ea984a2973c9171b4591a0')
 * http://hola.kibernum.com/api/admin-preload?action=updateDatabase
 *
 * http://hola.kibernum.com/api/admin-preload?action=add_refprofile_to_postlike
 *
 * http://hola.kibernum.com/api/admin-preload?action=add_refprofile_to_user





--Buscar un determinado valor, mostrar dicha columna, validando q exista esa columna en los documentos
--------------FIN MONGODB----------------------------------------------------------------


POSTGRES-----------------------------------------------------------------------------------------------------------------------------POSTGRES
Para entrar al postgres local via consola
	root@asira:/usr/local/pgsql/bin# ./psql -U postgres SISREPOR

Entrar desde consola
	psql -U postgres -h localhost -p5433 SIMA

Iniciar Postgresql desde usuario postgres
	/usr/local/pgsql/bin/pg_ctl start -D /usr/local/pgsql/data

	/opt/postgresql9/bin/postgres -D /opt/postgresql9/data
	o
    /opt/postgresql9/bin/pg_ctl -D /opt/postgresql9/data -l logfile start

--Estas dos Funcionan bien archivo comprimido
	pg_dump -i -U postgres -F c -b -v -f /home/asira/siga_080112.backup SIMA;
	pg_restore --host 127.0.0.1 --port 5432 --username postgres --dbname "SIMA" --verbose /home/ali/siga_24-10.backup
	
--Restaurar una base de datos
	/opt/postgres/9.1/bin/pg_restore --host 127.0.0.1 --port 5432 --username postgres --dbname "centauro_db01" --verbose /home/asira/centauro_25-06.backup 
	/opt/postgres/9.1/bin/pg_restore --host 127.0.0.1 --port 5432 --username postgres --dbname "SIMA" --verbose /home/asira/siga_21-08.backup
	/opt/postgres/9.1/bin/pg_restore --host 127.0.0.1 --port 5432 --username postgres --dbname "SIMA" --verbose /home/asira/siga_6pm.backup -n "SIMA012"

--Segundo metodo de backup Archivo plano
	pg_dump -i -U postgres -F p -v -f /home/asira/base_datos.sql SIMA;
--Restore con el metodo de archivo plano
	psql -U postgres  -h localhost testdb < /home/asira/base_datos.sql
	psql -h localhost -p 5432 -U postgres -f "bkp_siga_BD-031012-manual.sql" SIMA

--De tablas en el esquema publico
	pg_dump -i -h localhost -p 5432 -U postgres -F c -b -v -f "/home/asira/prueba.backup" SIMA --table=ali_prueba
	pg_restore --host 127.0.0.1 --port 5432 --username postgres --dbname "SIMA_PRUEBA" --verbose "/home/asira/prueba.backup"

--De solo una tabla en referencia a un esquema
	pg_restore --host 127.0.0.1 --port 5432 --username postgres --dbname "SIMA" --verbose /home/ali/siga_27-10.backup -t bnregmuedistinct2 -n "SIMA011"

--De un esquema usando comodines
	pg_dump -h 192.168.22.5 -n '*013*'  -i -U postgres -F c -b -v -f /home/asira/siga_280613.backup SIMA;

--Exportar o importar una tabla desde consola
	COPY fainstedu (codinst, nominst, dirinst, telinst, faxinst, emailinst, codedo, codciu, codmun, codpar, ingesta, matinst, coddep, codsub, persona, id) to '/home/postgres/fainsedu3.backup';
	COPY fainstedu (codinst, nominst, dirinst, telinst, faxinst, emailinst, codedo, codciu, codmun, codpar, ingesta, matinst, coddep, codsub, persona, id) from '/home/postgres/fainsedu3.backup';

--Resultado de un query
	copy (select * from nombre_tabla) to 'directorio_name/file_name';

    ﻿copy personal from '/tmp/personal.txt' USING delimiters ';'


Recargar el Postgres
	/etc/init.d/postgres reload

Log de Postgres
	/var/log/postgresql# nano postgresql-8.3-main.log
	nano /var/log/postgresql/postgresql-8.3-main.log

Cambiar nombre a la base de datos
	ALTER DATABASE olddbname RENAME TO newdbname;

Renombrar una columna
	alter table mi-tabla rename column nombre-antiguo to nombre-nuevo;

Agregar una columna y asociarle una secuencia
	ALTER TABLE pro_mig add COLUMN id integer;
	ALTER TABLE pro_mig ALTER COLUMN id SET DEFAULT NEXTVAL('id_proforma_migrada_seq');

Modificar la columna de una tabla
	alter table "SIMA012".opbenefi alter column  telben type character varying(32)

Poner una columna not null o quitar
    ALTER TABLE proceso ALTER COLUMN jerarquia_menu set NOT NULL;
    ALTER TABLE proceso ALTER COLUMN jerarquia_menu drop NOT NULL;

Insertar un primary key
	ALTER TABLE caramart ADD CONSTRAINT pk_ramart primary key (ramart) ;

Insertar un constraint foreign key
	ALTER TABLE APLI_USER add  CONSTRAINT apli_user_fkey FOREIGN KEY (loguse)
      	REFERENCES usuarios (loguse) MATCH SIMPLE
	ON UPDATE NO ACTION ON DELETE NO ACTION

Chequear actividad del postgres
	select * from pg_stat_activity order by query_start desc

Buscar con una expresion regular
	select 'select elimina_cliente_proveedor(''' ||  CODPRO|| ''');'
	from caprovee
	where not codpro ~ '^[JVGE][0-9]{6,9}$'

Buscar los numcom cuya dos primeras caracteres sean numeros
	select  substring(numcom from '[0-9]*$'), numcom
	from contabc
	where numcom in ('RF087505', '00093891')
	and numcom ~ '^[0-9]{1,2}[0-9]*$'

Deshabilitar Trigger
	ALTER TABLE caprovee DISABLE/ENABLE TRIGGER trig_elimina_caracter_invalido;

Actualizar el valor de una secuencia
	select setval('"SIMA012".fadefcaj_seq_1', 1)

Actualizar el valor de una secuencia con el valor de una tabla
	select setval('"SIMA012".fadefcaj_seq_1', max(reffac)::bigint) from "SIMA012".fafactur;

Borrar un esquema en cascada
	DROP SCHEMA "SIMA001" cascade;

Parar servicio de conexion a una base de datos
	select pg_terminate_backend(procpid) from pg_stat_activity where datname='sigefirrhh'

	select pg_terminate_backend(procpid) from pg_stat_activity where datname='centauro_db01';
	drop database centauro_db01;
	create database centauro_db01;

Bug de postgres
	El ilike es case sentive para la ñ ejemplo: apellidos ilike '%piÑ%' solo lo encuentra si la ñ es mayuscula en el registro, la solucion es
	convertir a mayuscula ambos lados

Query para generar los respaldos en plano de las base de datos del deb3
	SELECT 'pg_dump -i -h pzosdgstdeb3 -p 5432 -U ali_sira -F p -b -v -f /home/ali_sira/respaldos_db/deb3/'||datname||'.backup '||datname
	FROM pg_database

	SELECT 'pg_dump -i -h pzosdgstdeb30 -p 5432 -U ali_sira -F p -b -v -f /home/ali_sira/respaldos_db/deb30_5432/'||datname||'.backup '||datname
	FROM pg_database

	SELECT 'pg_dump -i -h pzosdgstdeb30 -p 5433 -U ali_sira -F p -b -v -f /home/ali_sira/respaldos_db/deb30_5433/'||datname||'.backup '||datname
	FROM pg_database


Agregar un constraint tipo expresion regular
	alter table facliente add check (codpro ~ '^[JVGE][0-9]{6,9}$')
	alter table facliente add check (rifpro ~ '^[JVGE][0-9]{6,9}$')
	CONSTRAINT facliente_check CHECK (codpro::text = rifpro::text),

Habilitar el log para todos los eventos en el postgres.conf
	log_statement = 'all'


TOMCAT------------------------------------------------------------------------------------------------------------------------------TOMCAT
Configuracion del SIGEFIRRH
	/web/apache-tomcat-5.5.27/conf/server.xml

Iniciar el Tomcat
	/web/apache-tomcat-5.5.27/bin/startup.sh
Para el Tomcat
	/web/apache-tomcat-5.5.27/bin/shutdown.sh

Local en mi maquina
	/usr/share/tomcat6/bin/startup.sh

	/usr/share/tomcat6/logs

	/var/lib/tomcat6/webapps$

APACHE------------------------------------------------------------------------------------------------------------------------------APACHE
Habilitar o deshabilitar apache
    sudo systemctl mask apache2
    sudo systemctl unmask apache2

Archivo para cambiar el puerto de escucha
    /etc/apache2/ports.conf

Rutas de log de apache
	/var/log/apache2

Archivos de configuracion del apache
	/etc/apache2/sites-available/default

Usted debe tipiar los siguientes comandos con sistemas Linux bajo Debian / Ubuntu:# /etc/init.d/apache2 restart
	# /etc/init.d/apache2 stop
	# /etc/init.d/apache2 start

Reload de las nuevas configuraciones de apache
	/etc/init.d/apache2 reload

Configuracion optima apache
		DocumentRoot /var/www

        <Directory /var/www/>
		Order Deny,Allow
		AllowOverride None
		Options -Indexes
        </Directory>

	<Directory /var/www/cordillera>
		DirectoryIndex public
            	AllowOverride All
            	Order Deny,Allow
		Options -Indexes
        </Directory>


LINUX--------------------------------------------------------------------------------------------------------------------------------LINUX

Dar permiso al usuario no root para iniciar servidores usando el puerto 80
    sudo apt-get install libcap2-bin
    sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\``

Graba el escritorio
	/usr/local/bin/recordmydesktop --no-sound

Sincronizar la carpeta de desarrollo con el pendrive
	rsync -av -u --exclude=*.gz --exclude=*.bz2 --exclude=*.1 --exclude=*.log --exclude=*.xls --exclude=*.pdf --exclude=.svn* --exclude=*.txt  /var/www /media/ALI_16GB/

Sincronizar el SIGA produccion con mi maquina y mi maquina con /var/www
	rsync -av -u --exclude=*.gz --exclude=*.bz2 --exclude=*.1 --exclude=*.log --exclude=*.xls  /var/www asira@172.16.2.24:/home/asira/
	rsync -av -u --exclude=*.gz --exclude=*.bz2 --exclude=*.1 --exclude=*.log /home/ali/workspace/www/var/
	chown ali:ali ../www -R
	rsync -av -u --exclude=*.gz --exclude=*.bz2 --exclude=*.1 --exclude=*.log /var/www/reportesweb ali@172.16.2.24:/home/ali/workspace
	chmod -R 776 /var/www/cidesa/siga/log/

Sincronizar Centauro de produccion con una ruta destino
	rsync -av -u --exclude=*.gz --exclude=*.bz2 --exclude=*.1 --exclude=*.log --exclude=*.xls --exclude=.svn --exclude=*.err --exclude=*.csv --exclude=*.txt --exclude=*upload/ /var/www/centauro asira@172.16.2.24:/home/asira

Sincronizar mi home con el disco duro
	sudo rsync -av -u --exclude=.cache --exclude=.compiz  --exclude=.config  /home/* /media/asira/80B05A92B05A8E92/asira/ --exclude=.gconf --exclude=.local  --exclude=.libreoffice --exclude=.mozilla --exclude=.netbeans --exclude=.shotwell --exclude=.teamviewer --exclude=.thumbnails --exclude=.wine --exclude=Música --exclude=Musica

Sincronizar la carpeta de proyectos con el disco duro excepto el SIGA
	rsync -av -u  /var/www/ /media/asira/80B05A92B05A8E92/www/ --exclude=log --exclude=.thumbnails --exclude=.wine --exclude=cidesa/ --exclude=cidesa_actualizado/


Copiar archivos desde mi casa a PDVAL
	scp -P 1962 lb_migracion_proformas1.php asira@200.11.139.251:/home/asira

copiar un archivo desde mi maquina a otra conectado por ssh
	scp asira@172.16.8.37:/home/asira/Descargas/lb_asignar_porc.php  /var/www/centauro/
	scp asira@192.168.22.2:/var/www/centauro/* /var/www/

	cp -r ../DB/* ./

Buscar todos los archivos y ordenarlos por fecha de modificacion
	find -type f | xargs ls -ltr

Copiar archivos con find
	find -name 'databases*.yml' -exec scp -r '{}' ali@172.16.9.218:/home/asira ';'

Buscar todos los archivos dentro de esta ruta que sean de tipo archivo y q hayan sido accesados en los ultimos dos dias
	find /var/ -name '*.log' -type f -atime +2
	find ./ -mtime -1

Igual que el anterior pero ordenarlo por fecha
	find ./ -type f  -mtime -2 | xargs ls -ltr

Buscar archivos accedidos en los ultimos 10 minutos
	find /path-directorio -amin -10

Busca archivos con por tipo con un texto especifico
	find ./ -type f -name '*.php' | xargs grep -r -l -i ' and a.codpre like  (('

Borrar todos los archivos con cierto criterio
	find -name '*.avi' -exec rm  '{}'  ';'

Busca los archivos y muestra las columnas tamaño y nombre
	find -type f -size +5000k -exec ls -lah {} \; | awk '{ print $5 " " $8 }'

Borra todos los archivos menor al indicado en bytes o en k
	find .  -name "*.jpeg" -size 1008c -exec rm {} \;

Mueve los archivos a un destino
	find -name '*.swf' -exec mv  '{}' /home/asira/ ';'

Cambia los permisos a las carpetas
	find -type d | xargs chmod 110

buscar varias extensiones y contar archivos
	find . -name *.mp3 -or -name *.avi -or -name *.wma -or -name *.mpg -or -name *.mpeg -or -name *.MP3 -or -name *.AVI -or -name *.WMA -or -name *.MPG -or -name *.txt -type f |  wc -l

buscar las no coincidencias
	find . ! -name *.mp3 -and ! -name *.wma -and ! -name *.mpg -and ! -name *.mpeg -and ! -name *.MP3 -and ! -name *.AVI -and ! -name *.WMA -and ! -name *.MPG -and ! -name *.txt -and ! -name *.avi -type f |  wc -l

Busca y cuenta todos los archivos incluyendo aquellos que no tienen extension
find  -name '*' -type f |  wc -l


--Sacar el audio de un video
sudo apt-get install mplayer
mplayer -vo null -dumpaudio -dumpfile archivo.mp3 basshunter_saturday.mkv

--Transformar un wma to mp3 en dos pasos
    mplayer 01\ Pista\ 1.wma -ao pcm
    lame --r3mix audiodump.wav 4.mp3



--Arreglar el siguiente error
W: Error de GPG: http://packages.linuxmint.com debian Release: Las firmas siguientes no se pudieron verificar porque su llave pública no está disponible: NO_PUBKEY 3EE67F3D0FF405B2
gpg --keyserver pgpkeys.mit.edu --recv-key 3EE67F3D0FF405B2
gpg -a --export 3EE67F3D0FF405B2 | sudo apt-key add -


Busque en todos los archivos contenidos en un cierto directorio, -r recursivamente en todos los subdirectorios, -i sin distinguir May/Min, -l no muestra el texto q encontro:
	grep -r -l -i  "CODCAT" /home/asira/Documentos/SIGA/*
	grep -r "TODO" /home/zootropo/codigo/
	cat *.py | egrep "CADENA"

Muestra los grupos
	cat /etc/group

Agrega asira a un grupo www-data
	addgroup asira www-data

Cambiar Grupo y dueño
	chgrp -R root sf/
	chown -R asira sf/

Listar solo directorios
	ls -l | grep ^d o  ls -d */

Listar solo los archivos
	ls -l | grep -v ^d
Listar por orden de tamaño
	ls -lSh
Listar por fecha ascendente
	ls -t
Listar por fecha descendente
	ls -tr
Contar el numero de archivos dentro de un directorio
	ls | wc -l
	ls -R | wc -l (Recursivo)
	ls -AR | wc -l (Recursivo con archivos ocultos exceptp . y ..)

Crear acceso simbolico
	ln -s /web/apache-tomcat-5.5.27/logs/catalina.out log_cata.log

Crear acceso simbólico a ejecutable(acceso directo)
    ln -s /opt/FreeFileSync/FreeFileSync /usr/local/bin/FreeFileSync

Muestra las particiones y el espacio disponible en GIGABYTES
	df -h

Muestra el espacio que ocupa un archivo u directorio
	du -hlsc centauro/

Despliega todos los procesos del sistema, con nombre y tiempo de inicio
	ps -aux
	ps -aux | grep apache	//Busca los procesos por nombre
	ps -U root -u root u

Reiniciar el tomcat de SIGEFIRRH
	/web/apache-tomcat-5.5.27/bin/startup.sh
	/web/apache-tomcat-5.5.27/bin/shutdown.sh


Ver las dependecias
	ldd /usr/bin/svn

Buscar archivos repetidos con fdupes  guardarlo en un archivo
	fdupes -r . > archivos_repetidos.txt	

Buscar paquetes instalados
	aptitude search '~i'

Solicitar conexion a la red
	dhclient eth0 -v

1) Requerido

sudo apt-get install aptitude
sudo aptitude install php7.0 php7.0-odbc php7.0-cli php7.0-pgsql php7.0-curl php7.0-gd  php7.0-xdebug nmap htop sudo docdiff rsync postgresql rpm rar unrar pgadmin3 terminator git apache2 php-fpdf odbc-postgresql bzip2 ssh kompare qmmp tar gimp mencoder libgstreamer-plugins-bad1.0-0 libmpg123-0 libjs-jquery  phppgadmin postgresql-doc postgresql-doc-9.1 openjdk-7-jdk g++ qtqr lib32asound2 libc6-pic lib32z1 ia32-libs gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-plugins-bad subversion libsvn1 cinnamon pyrenamer dvdrip handbrake ogmrip gmountiso isomaster  genisoimage motion picard vlc brasero k3b gparted gnash duff maven fdupes software-properties-common libreoffice ciano kdenlive  handbrake k3b  ktorrent

Instalar Oracle java 8
sudo add-apt-repository ppa:webupd8team/java
sudo aptitude update



Buscar archivos repetidos
    duff -r  /home/kzkggaara/Pictures

Graba pantalla
    kazam

Reproductor de flash: gnash
    gnash --fullscreen 10_java_Polymorphism.swf

Paquetes a instalar para montar servidor de subversion
subversion libapache2-svn libapache-htpasswd-perl

2) Opcional

- Freeplane programa para hacer mapas mentales sencill pero bueno
- aptitude install  libwxgtk2.8-dbg  libwxgtk2.8-dev  libwxgtk2.8-0
- aptitude install  libxslt-dev
- aptitude install libreadline6-dbg libreadline6-dev
- apt-get install wireless-tools
- wicd
- wired and wireless network manager - metapackage
- cd-circleprint
- pgdesigner

Saber mi ippublica
	curl ifconfig.me(Desde consola)
	ifconfig.me (Desde el browser)

FDupes uses md5sums and then a byte by byte comparison to find
duplicate files within a set of directories. It has several useful
options including recursion.

aptitude install jabber14 jabber libjabberd2

archivo con los dns para poder entrar a internet
	/etc/resolv.conf

Interface de red
	/etc/network/interface

489  vim /etc/hosts.allow
490  vim /etc/hosts.deny
493  vim /etc/sudoers

Instrucciones para generar una llave en

1. En mi maquina local genero el keygen
	ssh-keygen -t dsa
2. Edito el archivo generado
	cat /home/asira/.ssh/id_dsa.pub
3. En la maquina remota
	cd .ssh/
4. Creo archivo de autorizacion y copio y pego la llave generada(texto) en el paso 2 en un archivo que se llame
	nano authorized_keys

Crea accesos directos a comandos por consola
	nano /etc/bash.bashrc

	Comunes
	alias ls='ls --color=auto';
	alias postgres_log='tail -f /var/log/postgresql/postgresql-9.5-main.log  -n 200';
	alias cordillera_log='tail -f /var/www/cordillera/storage/logs/laravel.log -n200';
	alias apache_log='tail -f /var/log/apache2/error.log -n200';

	alias sigaweb='ssh asira@192.168.22.6'
	alias centauro='ssh asira@192.168.22.2 -p222';


Dice de cuantos bits es el so
	getconf LONG_BIT
	file /usr/bin/file
	uname -a
		32-bit saldrá i686 and/or i386
		64-bit saldrá x86_64

Aumenta prioridad de ejecucion linux
	sysctl -w kernel.shmmax=1236640000
	cat /proc/sys/kernel/shmmax
	sysctl -a | grep -i shm

valor actual sigadb 3015876708

Cambiar la hora al servidor
	date --set="2008-6-29 11:59 AM"
    timedatectl set-time '2016-08-16 12:02:40'

Instalar este paquete para que funciones el sdk de android en ubuntu 64bits
	aptitude install  ia32-libs

scp -P 2222  /home/asira/Curso/PHP5.pdf  root@192.168.1.104:/mnt/sdcard/temp

Saber que PID utiliza un puerto
	Metodo 1 sudo lsof -i:8080
	Metodo 2 sudo netstat -lpn |grep :'3000'


------SUBVERSION
Paquete para que sirva el svn instalar en el servidor de svn no en el cliente
	aptitude install libapache2-svn

Crear trabajo en el reposotorio
	svnadmin create modelos_siga
	svn import /home/asira/Version1/  file:///home/svn/modelos_siga/ -m "Importacion inicial"

En la cvg
	sudo svn import -m "PRIMERA VERSION" /home/ali_sira/instrucciones/ file:///home/svn/instrucciones

	Modificar el archivo /etc/apache2/httpd.conf en incluir la ruta
	<Location /modelos_siga>
		DAV svn
		SVNPath /home/asira/modelos_siga
	</Location>

Crear una copia local de trabajo desde el repositorioo
	svn checkout http://192.168.22.57/siga/ /var/www/carpeta

Buscar las modificaciones en un archivo en el svn
	svn blame inventario_fisico.php | grep ^\ \ \ 145
	svn blame inventario_fisico.php | grep 145

Instalar .deb
	dpkg -i archivo.deb

Desinstalar.
	dpkg -r nombre_del_pakete

Instala paquetes rpm sin tomar en cuenta las dependencias
	rpm -i --nodeps

Convierte paquetes rpm en dpkg
	aptitude install alien

COMO MONTAR UNA IMAGEN
	mount -t iso9660 -o loop '/home/asira/Textos y Comentarios Español/dt00_m.img' '/home/asira'


----INSTALAR TEAMVIEWER
Habilitar instalacion de arquitectura de 32bits


The following packages have unmet dependencies:
 ia32-libs : Depends: ia32-libs-i386 but it is not installable
E: Unable to correct problems, you have held broken packages.


         Solución:

                          dpkg --add-architecture i386 # enable multi-arch
                          apt-get update
                          apt-get install libc6 # install base 32bit libraries
                          apt-get -f install



-instalar paquetes de 32bits
aptitude install libc6:i386  libasound2:i386  libfontconfig1:i386 libfreetype6:i386  libjpeg62:i386 libpng12-0:i386 libsm6:i386 libxdamage1:i386 libxext6:i386  libxinerama1:i386 libxrandr2:i386 libxfixes3:i386  libxrender1:i386  libxtst6:i386  zlib1g:i386

Instalados en Elementary loky al 20/05/17
sudo aptitude install  libasound2:i386  libdbus-1-3:i386 libexpat1:i386 libfontconfig1:i386 libfreetype6:i386 libjpeg62:i386 libsm6:i386 libxdamage1:i386 libxext6:i386 libxfixes3:i386 libxinerama1:i386 libxrandr2:i386 libxrender1:i386 libxtst6:i386 zlib1g:i386


Installation via command line

If you prefer to use the command line, or if there is no graphical installer available, you can use one of these commands as an administrator: 

apt install teamviewer_12.0.xxxxx_i386.deb 
Older systems (Ubuntu 14.04, Debian 7 and below)

Run this command:

dpkg -i teamviewer_12.0.xxxxx_i386.deb 
In case dpkg indicates missing dependencies, complete the installation by executing the following command:

apt-get install -f

-instalar teamviewer de 32bits
dpkg -i teamviewer_10.0.37742_i386.deb


--ACTIVAR EL NUMLOCK
    sudo apt-get update
    sudo apt-get -y install numlockx
    sudo nano /usr/share/lightdm/lightdm.conf.d/50-greeter-wrapper.conf
    o
    sudo sed -i 's|^exit 0.*$|# Numlock enable\n[ -x /usr/bin/numlockx ] \&\& numlockx on\n\nexit 0|' /etc/rc.local


create eclipse STS link access para q trabaje en ubuntu 16 y mas


1. Crear script bash
	eclipse-sts.sh
		#!/bin/sh
		# Run headers_$1 command for all suitable architectures

		/opt/sts-bundle/sts-3.8.3.RELEASE/STS
2. Crear enlaze simbolico
	sudo ln -s /opt/sts-bundle/sts-3.8.3.RELEASE/eclipse-sts.sh /usr/bin/eclipse_sts

3.Solo se debe ejecutar desde consola no corre bien desde la interfaz grafica
4.Verificar q haya exportado la variable SWT_GTK3=0 en el /etc/bash.bashrc ponerla al final del archivo


---SIGA

Sirve para rotar los log por proceso Meter esto en un cron para que se ejecute diariamente.

	/var/www/cidesa/siga/symfony log-rotate facturacion prod
	/var/www/cidesa/siga/symfony log-rotate compras prod

Abrir la ventana de impresion
	system-config-printer

--Apache
Xdebug texto para el archivo php.ini
zend_extension="/usr/lib/php5/20121212/xdebug.so"
xdebug.remote_enable=1
xdebug.remote_handler=dbgp
xdebug.remote_mode=req
xdebug.remote_host=127.0.0.1
xdebug.remote_port=9000


--GIT

Crear un repositorio local
    git init

Asociar un repositorio local a uno remoto de github, debe estar en la ruta actual donde se creo el repositorio local (donde se ejecuto el git init)
    git remote add origin https://github.com/alisira/plantilla-angular.git

Crear un branch y ponerlo activo
    git checkout -b branch_pruebaX

Subir al github el repositorio recien creado
    git push origin branch_prueba

Hacer un listado de los branchs locales
    git branch

Hacer un listado de los branchs locales y remotos
    git branch -a

Cambiar branch activo
    git checkout master

Ver los logs con los archivos modificados
	git log --stat --pretty=format:"%H - %an : %s"	
Ver todos los commits de un archivo en particular
	git log -p -- SOPORTE/1CONTROL\ DE\ CAMBIOS.ods
Llevar el archivo a una version en particular
	git checkout 0d70ba9^ Pictures/drupal-icon.png

Guarda temporalmente los cambios en una pila para poder hacer pull
	git stash

Recupera lo que estaba guardado en la pila despues de hacer pull
	git stash apply


--Configuracion Firefox para que no pida permiso de acceso a la camara
    media.navigator.permission.disabled;true

--CSS
    en la propiedad content se puede poner directamente el codigo unicode del caracter que se desea aparezca



--NODE-----------------------
iniciar servicios node gulp dev --client=fch

Trabajar con Async

var async = require("async");
        var moment = require("moment");
        var Analytics = require("app/models/analytics");
        var Post = require("app/models/post");
        var GroupPost = require("app/models/group_post");
        var Comment = require("app/models/comment");
        var PostLike = require("app/models/post_like");
        var Group = require("app/models/group");

        var date = moment(this.req.query.date_param);
        var fromDate = date.format('YYYY-MM-DD');
        date.add(1, 'month');
        var toDate = date.format('YYYY-MM-DD');


        async.parallel([
            function (callback) {
                Analytics.reportActiveUsers(fromDate, toDate, callback);
            },
            function (callback) {
                Analytics.reportHomeVisits(fromDate, toDate, callback);
            },
            function (callback) {
                Post.reportNumberOfPosts(fromDate, toDate, callback);
            },
            function (callback) {
                GroupPost.reportNumberOfPosts(fromDate, toDate, callback);
            },
            function (callback) {
                Comment.reportNumberOfWallComments(fromDate, toDate, callback);
            },
            function (callback) {
                Comment.reportNumberOfGroupComments(fromDate, toDate, callback);
            },
            function (callback) {
                PostLike.reportNumberOfWallLikes(fromDate, toDate, callback);
            },
            function (callback) {
                PostLike.reportNumberOfGroupLikes(fromDate, toDate, callback);
            },
            function (callback) {
                Group.reportNumberofNewGroups(fromDate, toDate, callback);
            },
            function (callback) {
                GroupPost.reportNumberOfPostsWithImageOrDocument(fromDate, toDate, callback);
            },
            function (callback) {
                Analytics.reportPageVisits(fromDate, toDate, callback);
            },
            function (callback) {
                Analytics.reportePrueba(fromDate, toDate, callback);
            }
        ],
        function (err, results) {
            var data = {
                'active_users': results[0],
                'home_visits': results[1],
                'wall_posts': results[2],
                'group_posts': results[3],
                'wall_comments': results[4],
                'group_comments': results[5],
                'wall_likes': results[6],
                'group_likes': results[7],
                'groups_new': results[8],
                'group_posts_with_file': results[9],
                'page_visits': results[10],
                'message' : results[11]
            }
            console.log('Despues:' +results );
            browser.display(err, data);
        })
    }

Recorrer un arreglo de la forma

[ { _id: '56030713cd69b331262edcd0', count: 40 },
  { _id: '560300854d64ef7c2384816a', count: 27 },
  { _id: '560307727ea0f730265b378f', count: 24 },
  { _id: '56030719672ef633261a2ce4', count: 10 } ]

for(i=0;i<data.length;i++){
    console.log(data[i]._id);
    data[i].saludo = 'asi se inserta un campo dado q cada uno de los elementos del array son objetos se reconoce por los corchetes';
}

--JAVASCRIPT


/**
 * Convertir un objeto a un arreglo
 * en JavaScript
 * 
 * @author parzibyte
 * 
 * https://parzibyte.me/blog
 */
	let alumnosConCalificaciones = {
		"Luis": 100,
		"Pedro": 90,
		"María José": 100,
		"John Galt": 99
	};

// Object.entries convierte tanto clave y valor. Cada par es convertido a un arreglo. Al final tenemos un array de arrays
	let arregloDeClavesYValores = Object.entries(alumnosConCalificaciones);
	console.log("Claves y valores: ", arregloDeClavesYValores);

	/*
	Salida:
	Claves y valores:  [ [ 'Luis', 100 ],
	  [ 'Pedro', 90 ],
	  [ 'María José', 100 ],
	  [ 'John Galt', 99 ] ]
	*/

// Object.values toma los valores, para este ejemplo serían las calificaciones
	let calificaciones = Object.values(alumnosConCalificaciones);
	console.log("Valores: ", calificaciones);
	/*Salida:
	Valores:  [ 100, 90, 100, 99 ]
	*/

// Object.keys toma las claves, para este ejemplo serían los nombres de alumnos
	let alumnos = Object.keys(alumnosConCalificaciones);
	console.log("Claves: ", alumnos);
	/*Salida:
	Claves:  [ 'Luis', 'Pedro', 'María José', 'John Galt' ]
	*/


Funcion map de un array itera sobre los valores de un array y genera otro segun el valor del callback
    var numeros = [1, 4, 9];
    var dobles  = numeros.map(function(num) {
      return num * 2;
    });

    // dobles es ahora [2, 8, 18]
    // numeros sigue siendo [1, 4, 9]


Crear un date con hora 0
	new Date('2019-06-24T00:00:00');

Generar una imagen de un tamaño x
	http://placehold.it/30x30

Date.now No sirve para mandar la fecha actual desde node

Date() =  moment();

Transformar un objeto en un array y recorrerlo
	if(Array.isArray(req)) {
		resul = req;
	} else {
		resul = new Array(req);
	}

	for (i=0;i<resul.length;i++){
		console.log(resul[i]);
	}

	alert(resul.length);

	console.log('El otro');

	for (var item in req) {
		console.log(req[item].code);
		//console.log(item);
	}


Recorrer los checkboxes marcados
        checkboxes = $(".relationatedProducts");
        var cont = 0;

        for (var x = 0; x < checkboxes.length; x++) {
            //console.log(checkboxes[x].id);
            if (checkboxes[x].checked) {
                cont = cont + 1;
                //console.log(checkboxes[x].value);
            }
        }

Transformar una funcion al patron promise codigo de prueba

	
Ejemplo 1

	<script>

	function Promise(){

	    var self = this;
	    var thenCallback = null;

	    self.then = function(callback){
	    	console.log(3);
		thenCallback = callback;
	  
	    };

	    self.complete = function(args){
	    	console.log(thenCallback);
	    	//setTimeout(self.saludos, 2500);

			$.get("https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js", function(data, status){
		    //alert("Data: " + data + "\nStatus: " + status);
		    console.log('yes');

				if (thenCallback && typeof thenCallback === 'function'){
			    console.log(4);
			    thenCallback(data);
			}


		});

		return this;
	    };

	}

	var y = new Promise();
	var d = y.complete().then(function(resp){console.log(resp)});

	</script>

Ejemplo 2

	userService.authenticate = function (){
	    
	    var self = this;
	    var thenCallback = null;

	    self.then = function(callback){
	        thenCallback = callback;
	  
	    };

	    self.complete = function(credentials){
	    	//Debe ser una funcion asincrona obligatoriamente con un callback
			
			var headers = credentials ? {
				authorization : "Basic "
						+ btoa(credentials.username + ":"
								+ credentials.password)
			} : {};

			$http.get('user', {
				headers : headers
			}).then(function(response) {
				
				user = {};
				if (response.data) {
					user =  response.data.principal;
					user.authenticated = true; 
				} else {
					user = {};
					user.authenticated = false;
				}
				
				if (thenCallback && typeof thenCallback === 'function'){		            
					thenCallback(response.data);
		        }				

			}, function() {
				user.authenticated = false;
				login(false);
			});

	        return this;
	    };	    
	    
	    return this;

	}



Convertir Array To Json

	http://stackoverflow.com/questions/2295496/convert-array-to-json

	var tipo = new Array();
	    tipo.push('feo');
		tipo.push('malo');

	var nombre = new Array();
	nombre.push('Alianna');
	nombre.push('Gaby');

	var pluginArrayArg = new Object();
	    pluginArrayArg.tipo =tipo;
	    pluginArrayArg.nombre = nombre;


	var jsonArray = JSON.parse(JSON.stringify(pluginArrayArg))

	console.log('Abajo');
	console.log(jsonArray);


Filter
	words.filter(word => word.length > 6);


Funcion para redondear decimales de una forma efectiva corrigiendo el bug de javascript (http://www.jacklmoore.com/notes/rounding-in-javascript/)

	Number(Math.round(1.005+'e2')+'e-2'); // 1.01
	And to abstract that into something more usable:

	function round(value, decimals) {
	  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
	}

	Ejemplo
	round(1.005, 2); // 1.01



Buscar la manera de eliminar la fecha local de Wed Sep 30 2015 21:00:00 GMT-0300 (CLT) a Jan 09 2015 00:00:00 GMT-0200 (CLST)
las lineas de abajo son una guia
**************************************************************************

    var toDate = new Date(para.toDate);


    var desde = moment(toDate).format('DD-MM-YYYY');


        var date = moment(para.toDate);
        var desde = date.format('YYYY-MM-DD');
        date.add(1, 'month');
        var hasta = date.format('YYYY-MM-DD');



        var fechaReal = new Date('01-'+moment(toDate).format('MM-YYYY'));
        console.log('fechaReal ' + fechaReal);

        var fechaReal = new Date('01-'+moment(toDate).format('MM-YYYY'));
        console.log('fechaReal ' + fechaReal);
**************************************************************************

	$scope.product.createdAt  = moment(new Date()).local().format("YYYY-MM-DDTHH:mm:ss");
        console.log(moment(toDate).format('YYYY-MM'));
        console.log(para.toDate);
        console.log(toDate);
        console.log(desde);
        console.log(hasta);

**HOLA-ANGULAR********************************************************************************


Buscar el id de grupo en una referencia existente en la misma tabla
    var comment = new Comment();
    comment.params = {
        'search[and][source]': 'group_post',
        'search[and][active]': true,
        'search[and][ref_group]': $scope.id_group,
        'ref[group_post][fields]': 'title',
        'sort': '-date_created',
        'limit': 10
    };
    comment.ready = $scope.setLatestCommentReady;
    comment.findAll();
    };
	
**************************************************************************************


************ANGULAR8***********

iniciar servidor y detecte automaticamente los cambios 
    ng serve --port 80 --host cucacuca.com --poll=2000






****************ANGULARJS


Directive con atributo ngModel requerido asociado a un modelo del scope prinicipal

Directiva
	return {
    	restrict: 'AE',
    	replace: false,
    	require: 'ngModel',

Dentro de la funcin link para cambiar valor
	
	link: function(scope,  element, attrs, ngModel){
		ngModel.$setViewValue('StackOverflow');

Html
	<relationated-product ng-model="name" title="Buscar Productos" id-product="product.idProduct" ></relationated-product>



Two ways to get files html object information


	console.log(angular.element('#upload_image')[0].files[0]);
	console.log(angular.element(document.querySelector('#upload_image').files[0]));    





--JQUERY


Formato numerico

	#2
	Te puedes ahorrar todo ese proceso sin crear códigos, sólo utilizando este plugin: https://github.com/SamWM/jQuery-Plugins/tree/master/numeric/

	Y este plugin lo puedes usar para restringir que ingreses sólo números por ejemplo cuando solo quieres ingresar un DNI o documento de identidad:

	<!-- código html -->
	<input type="text" id="numero" name="numero">

	```js
	$(document).ready(function(){
	   $('#numero').numeric();    // números
	   $('#numero').numeric('.'); // números con separador decimal
	   $('#numero').numeric(','); // números con separador decimal
	});

	Y eso es todo.


Obtener y modificar los atributos de un objeto
        var modal = $("#myModal").attr("class");
        $("#myModal").attr({'class' : 'modal fade close'});
        $("#myModal").attr({'data-dismiss': 'modal'});
        $("#myModal").attr({'style': 'display: none'});
        $('#cropAreaContainer').attr({'style': 'width:600px;height:500px'});

incluir en el evento click del jquery del objeto para que en las llamas ajax no envie el formulario(buscar ejemplo o ver video "AJAX y Laravel usando jQuery.mp4" desde el minuto 7 al 10 )
    e.preventDefault();

Ejemplo recorrer elementos con jquery

	El código HTML de nuestra página es bastante simple:

	<input type="button" id="btnRecorrer" value="Recorrer Div !"/>
	<div id="divRecorrer" style="border:1px Solid Red">
	    <br/>
	    <p class="borde">Div o Párrafo</p>
	    <div class="borde">Div o Párrafo</div>
	    <p class="borde">Div o Párrafo</p>
	    <div class="borde">Div o Párrafo</div>
	    <p class="borde">Div o Párrafo</p>
	    <div class="borde">Div o Párrafo</div>
	    <p class="borde">Div o Párrafo</p>
	    <div class="borde">Div o Párrafo</div>
	    <br/>
	</div>


	Y el código jQuery:
	$(function () {
	    $("#btnRecorrer").click(function ()
	    {
		$("#divRecorrer p").each(function (index)
		{
		    $(this).removeClass();
		    $(this).addClass("parrafo");
		    $(this).text('Parrafo ' + index);
		})
	    })
	})



Subir un archivo metodo1
	$("#mandar").click(function (e) {
        var form = document.querySelector('#upload_form');
        e.preventDefault();
        var formdata = new FormData(form);

         $.ajax({
            url:'http://localhost/cordillera/public/storage/create',
            data:formdata,
            dataType:'json',
            async:false,
            type:'post',
            processData: false,
            contentType: false,
            success:function(response){
                console.log(response);
            },
        });

        return false;
    });

Subir un archivo metodo2
    $("#mandar_funciona").click(function(e){
        var form = document.querySelector('form');
        var request = new XMLHttpRequest();
        e.preventDefault();
        var formdata = new FormData(form);
        request.open('post', 'http://localhost/cordillera/public/storage/create');
        request.send(formdata);
        return false;
     });

Seleccionar contenido de un select

	Ejemplo1

	HTML

	<select id="my-select">
	<option value="1">This is text 1</option>
	<option value="2">This is text 2</option>
	<option value="3">This is text 3</option>
	</select>
	For text --

	$(document).ready(function() {
	    $("#my-select").change(function() {
	        alert($('#my-select option:selected').html());
	    });
	});
	For value --

	$(document).ready(function() {
	    $("#my-select").change(function() {
	        alert($(this).val());
	    });
	});

	Ejemplo2

	$('select').val()  // Get's the value

	$('select option:selected').val() ; // Get's the value

	$('select').find('option:selected').val() ; // Get's the value

	$('select option:selected').text()  // Gets you the text of the selected option



---PHP---------
Guardar el contenido html de un archivo en una variable
	ob_start();
	include 'templates/home.php';
	$html = ob_get_clean();

Crear un hash o encriptacion
	$hash = password_hash("superclaveX", PASSWORD_DEFAULT);
Validar un hash si es compatible con lo anterior
	$hash = '$2y$10$DvxsGEu.jmcDKzo5k8XHPe/iJRN324X1ZjyPJCuzyS6TwdH6ySoky';
    	
    	if (password_verify('lomejor77', $hash)) {
    		echo '¡La contraseña es válida!';
    	} else {
    		echo 'La contraseña no es válida.';
    	}
    	


--LARAVEL

	Archivo de configuracion de la base de datos para migrations, seeder y factories
		config/database.php

    Archivos de configuracion del ambiente
        .env

    Leer el archivo de configuracion en cualquier parte de la aplicacion
        ejemplo: config('app.env');

	Listar las rutas que acepta el sistema
		php artisan route:list

	Crear un modelo
		php artisan make:model category

	Crear un controlador
		php artisan make:controller FirstController

	Metodos recomendados para hacer las rutas
		Route::resource('/firstController/', 'FirstController');
		Route::get('/firstController/getList', 'FirstController@getList');

	Evaluar todas las rutas get con expresiones regulares
		Route::get('{slug_url}', function ($slug_url) {
	    	echo 'pajero y ';
		    return $slug_url;
		});

	Crear la migracion de la base de datos	https://laravel.com/docs/5.1/migrations
		1) Creacion de los archivos de migracion

			php artisan make:migration producto_table --create=producto

		2) Correr la migracion en la base de datos
			php artisan migrate

		3) Regenerar el modelo de base de datos borrando la data actual
			php artisan migrate:install

		4) Crear un controlador de tipo resource con sus metodos
			php artisan make:controller ProductController --resource

		5) Escapar la salida de laravel {!! !!} salida normal {{ }}

	Crear un seeder
		1) php artisan make:seeder ColorTableSeeder

	Migrar con los seeder
		php artisan migrate --seed


	Despues de borrar o modificar el nombre de algun archivo de migracion se debe correr para que los elimine de los autoload
		composer dump-autoload

    Incluir el token en la vista
        <input type="hidden" name="_token" value="{{ csrf_token() }}">

Error
    Problema: No supported encrypter found. The cipher and / or key length are invalid.
    Solucion: php artisan key:generate

Poner un parentesis a una busqueda
    $productOffers->Where(function ($query) use ($val){
		$query->where('first_name', 'ilike', "%".$val."%")
			  ->orWhere('last_name', 'ilike', "%".$val."%");
	});

Abrir y cerrar un formulario
    {!! Form::open(array('url' => $url, 'method' => 'post', 'id' => 'create'.$appTitle , 'enctype' => 'multipart/form-data'  ) ) !!}
    {!! Form::close() !!}


********************************JAVA*************************************************

Buscar el path de despliegue del war segun el servletcontext    		
    	HttpSession a = request.getSession();
    	ServletContext  b = a.getServletContext();    		
    	String fullPath = b.getRealPath("/");

	Ejemplo JBoss: /opt/wildfly-8.2.1.Final/standalone/deployments/founderlist.war


Obtiene el url de un archivo que esta el el path de la misma clase que se ejecuta o sea un archivo  config.properties q este dentro de xxx.java

	this.getClass().getResource( "config.properties" ).getPath();

Obtiene las propiedades del sistema
	System.getProperties()

ReplaceAll Example
	String text2 = json.replaceAll("\\\\", "").replaceAll("\"\\{", "\\{").replaceAll("\\}\"\\}", "\\}\\}");

Parsear parametros del request q vienen en pares 
	public @ResponseBody String enviroment(@RequestBody String param){

    	long limit = 0;
		long skip = 0;

		JSONParser parser = new JSONParser();
		try {
			JSONObject json = (JSONObject) parser.parse(param);
			
			limit =  (long) json.get("limit");
			skip =  (long) json.get("skip");
			
		} catch (ParseException e) {
			e.printStackTrace();
		}

Ways to get actual date as String 


until Java 1.7
	DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
	Date date = new Date();
	System.out.println(dateFormat.format(date));
	
or

	DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
	Calendar cal = Calendar.getInstance();
	System.out.println(dateFormat.format(cal.getTime()));

or
	String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime())


   // 2015/09/27 15:07:53
    System.out.println( new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(Calendar.getInstance().getTime()) );

    // 15:07:53
    System.out.println( new SimpleDateFormat("HH:mm:ss").format(Calendar.getInstance().getTime()) );

    // 09/28/2015
    System.out.println(new SimpleDateFormat("MM/dd/yyyy").format(Calendar.getInstance().getTime()));

    // 20150928_161823
    System.out.println( new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()) );

    // Mon Sep 28 16:24:28 CEST 2015
    System.out.println( Calendar.getInstance().getTime() );

    // Mon Sep 28 16:24:51 CEST 2015
    System.out.println( new Date(System.currentTimeMillis()) );

    // Mon Sep 28
    System.out.println( new Date().toString().substring(0, 10) );

    // 2015-09-28
    System.out.println( new java.sql.Date(System.currentTimeMillis()) );

    // 14:32:26
    Date d = new Date();
    System.out.println( (d.getTime() / 1000 / 60 / 60) % 24 + ":" + (d.getTime() / 1000 / 60) % 60 + ":" + (d.getTime() / 1000) % 60 );

    // 2015-09-28 17:12:35.584
    System.out.println( new Timestamp(System.currentTimeMillis()) );

    // Java 8

    // 2015-09-28T16:16:23.308+02:00[Europe/Belgrade]
    System.out.println( ZonedDateTime.now() );

    // Mon, 28 Sep 2015 16:16:23 +0200
    System.out.println( ZonedDateTime.now().format(DateTimeFormatter.RFC_1123_DATE_TIME) );

    // 2015-09-28
    System.out.println( LocalDate.now(ZoneId.of("Europe/Paris")) ); // rest zones id in ZoneId class

    // 16
    System.out.println( LocalTime.now().getHour() );

    // 2015-09-28T16:16:23.315
    System.out.println( LocalDateTime.now() );



Difference between parseInt and valueOf in java?

	Integer.valueOf(s)
	is similar to

	new Integer(Integer.parseInt(s))
	The difference is valueOf() returns an Integer, and parseInt() returns an int (a primitive type). Also note that valueOf() can return a cached Integer instance, which can cause confusing results where the result of == tests seem intermittently correct. Before autoboxing there could be a difference in convenience, after java 1.5 it doesn't really matter.

	Moreover, Integer.parseInt(s) can take primitive datatype as well.


********************************SPRING****************************

WORKING WITH @Bean ANOTATION EXAMPLE

Let consider I want specific implementation depending on some dynamic state. @Bean is perfect for that case.

@Bean
@Scope("prototype")
public SomeService someService() {
    switch (state) {
    case 1:
        return new Impl1();
    case 2:
        return new Impl2();
    case 3:
        return new Impl3();
    default:
        return new Impl();
    }
}
However there is no way to do that with @Component.


-----------------------
@Component and @Bean do two quite different things, and shouldn't be confused.

@Component (and @Service and @Repository) are used to auto-detect and auto-configure beans using classpath scanning. There's an implicit one-to-one mapping between the annotated class and the bean (i.e. one bean per class). Control of wiring is quite limited with this approach, since it's purely declarative.

@Bean is used to explicitly declare a single bean, rather than letting Spring do it automatically as above. It decouples the declaration of the bean from the class definition, and lets you create and configure beans exactly how you choose.

To answer your question...

would it have been possible to re-use the @Component annotation instead of introducing @Bean annotation?
Sure, probably; but they chose not to, since the two are quite different. Spring's already confusing enough without muddying the waters further.
-------------------------------


Convert Java to json and inverse

Add the following dependencies

<dependency>
    <groupId>org.codehaus.jackson</groupId> 
    <artifactId>jackson-mapper-asl</artifactId>
    <version>1.9.7</version>
</dependency>

<dependency>
    <groupId>org.codehaus.jackson</groupId> 
    <artifactId>jackson-core-asl</artifactId>
    <version>1.9.7</version>
</dependency>
Modify request as follows

$.ajax({ 
    url:urlName,    
    type:"POST", 
    contentType: "application/json; charset=utf-8",
    data: jsonString, //Stringified Json Object
    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
    cache: false,    //This will force requested pages not to be cached by the browser          
    processData:false, //To avoid making query String instead of JSON
    success: function(resposeJsonObject){
        // Success Message Handler
    }
});
Controller side

@RequestMapping(value = urlPattern , method = RequestMethod.POST)
public @ResponseBody Person save(@RequestBody Person jsonString) {

   Person person=personService.savedata(jsonString);
   return person;
}
@RequestBody - Covert Json object to java 
@ResponseBody- convert Java object to json


Recorrer una lista de errores de spring
List<FieldError> aa =  result.getFieldErrors();
Iterator<FieldError> i = aa.iterator();
while( i.hasNext() ){
	FieldError aa1 = i.next();  
	System.out.println(aa1.getField() +  "-" +  aa1.getDefaultMessage() );
}

***********************MAVEN****************************************

Ejecutar a traves de maven un proyecto de spring boot

	mvn clean spring-boot:run

Convierte a eclipse
	mvn eclipse:eclipse


------------------GULP------------------------------------------------

Instalar gulp globalmente
	sudo npm install --global gulp
Instalar diversos modulos de para minificar de forma global
	sudo npm install --global gulp-concat-css
	sudo npm install --global gulp-minify-css
	sudo npm install --global gulp-concat
	sudo npm install --global gulp-notify
	sudo npm install --global gulp-uglify

Crear acceso directos(enlaces simbolicos) a los modulos arriba instalados
	sudo npm link gulp
	sudo npm link gulp-concat
	etc


********NODE********

Ejecutar para que node detecte automaticamente el cambio en los archivos y reinicie el servidor 
    echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p




