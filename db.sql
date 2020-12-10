
/*==============================================================*/
/* Table: CATEGORY                                              */
/*==============================================================*/
create table CATEGORY 
(
   CATEGORYID           INT                            not null AUTO_INCREMENT,
   CATEGORYNAME         varchar(50)                    null,
   CATEGORYIMAGEURL     varchar(200)                   null,
   constraint PK_CATEGORY primary key (CATEGORYID)
);

/*==============================================================*/
/* Index: CATEGORY_PK                                           */
/*==============================================================*/
create unique index CATEGORY_PK on CATEGORY (
CATEGORYID ASC
);

/*==============================================================*/
/* Table: CATEGORY_TAG                                          */
/*==============================================================*/
create table CATEGORY_TAG 
(
   CATEGORYID           integer                        not null,
   TAGID                integer                        not null,
   constraint PK_CATEGORY_TAG primary key clustered (CATEGORYID, TAGID)
);

/*==============================================================*/
/* Index: CATEGORY_TAG_PK                                       */
/*==============================================================*/
create unique index CATEGORY_TAG_PK on CATEGORY_TAG (
CATEGORYID ASC,
TAGID ASC
);


/*==============================================================*/
/* Table: FAVORITE                                              */
/*==============================================================*/
create table FAVORITE 
(
   USERID               integer                        not null,
   MEALID               integer                        not null,
   constraint PK_FAVORITE primary key clustered (USERID, MEALID)
);

/*==============================================================*/
/* Index: FAVORITE_PK                                           */
/*==============================================================*/
create unique index FAVORITE_PK on FAVORITE (
USERID ASC,
MEALID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_5_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_5_FK on FAVORITE (
USERID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_6_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_6_FK on FAVORITE (
MEALID ASC
);

/*==============================================================*/
/* Table: MEAL                                                  */
/*==============================================================*/
create table MEAL 
(
   MEALID               INT                            not null AUTO_INCREMENT,
   USERID               integer                        not null,
   IMAGEURL             varchar(200)                   null,
   DURATION             integer                        null,
   INGREDIENTS          varchar(1000)                  null,
   STEPS                varchar(1000)                  null,
   COMPLEXITY           integer                        null,
   AFFORDABILITY        integer                        null,
   MEALNAME             varchar(50)                    null,
   constraint PK_MEAL primary key clustered (MEALID)
);

/*==============================================================*/
/* Index: MEAL_PK                                               */
/*==============================================================*/
create unique index MEAL_PK on MEAL (
MEALID ASC
);

/*==============================================================*/
/* Index: USER_MEAL_FK                                          */
/*==============================================================*/
create index USER_MEAL_FK on MEAL (
USERID ASC
);

/*==============================================================*/
/* Table: MEAL_TAG                                              */
/*==============================================================*/
create table MEAL_TAG 
(
   MEALID               integer                        not null,
   TAGID                integer                        not null,
   constraint PK_MEAL_TAG primary key clustered (MEALID, TAGID)
);

/*==============================================================*/
/* Index: RELATIONSHIP_1_PK                                     */
/*==============================================================*/
create unique index RELATIONSHIP_1_PK on MEAL_TAG (
MEALID ASC,
TAGID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_1_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_1_FK on MEAL_TAG (
MEALID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_2_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_2_FK on MEAL_TAG (
TAGID ASC
);

/*==============================================================*/
/* Table: RATEING                                               */
/*==============================================================*/
create table RATEING 
(
   USERID               integer                        not null ,
   MEALID               integer                        not null,
   RATEING              float(10)                      null,
   constraint PK_RATEING primary key clustered (USERID, MEALID)
);

/*==============================================================*/
/* Index: RATEING_PK                                            */
/*==============================================================*/
create unique index RATEING_PK on RATEING (
USERID ASC,
MEALID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_8_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_8_FK on RATEING (
USERID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_9_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_9_FK on RATEING (
MEALID ASC
);

/*==============================================================*/
/* Table: TAG                                                   */
/*==============================================================*/
create table TAG 
(
   TAGID                INT                            not null AUTO_INCREMENT,
   TYPE                 integer                        null,
   TAGNAME              varchar(50)                    null,
   constraint PK_TAG primary key clustered (TAGID)
);

/*==============================================================*/
/* Index: TAG_PK                                                */
/*==============================================================*/
create unique index TAG_PK on TAG (
TAGID ASC
);

/*==============================================================*/
/* Table: "USER"                                                */
/*==============================================================*/
create table USER 
(
   USERID               INT NOT NULL AUTO_INCREMENT,
   USERNAME             varchar(100)                   null,
   USERPASSWORD         varchar(50)                    null,
   constraint PK_USER primary key clustered (USERID)
);

/*==============================================================*/
/* Index: USER_PK                                               */
/*==============================================================*/
create unique index USER_PK on USER (
USERID ASC
);
