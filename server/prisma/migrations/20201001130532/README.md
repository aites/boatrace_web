# Migration `20201001130532`

This migration has been generated by solufa at 10/1/2020, 10:05:32 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `Task` (
`id` int  NOT NULL  AUTO_INCREMENT,
`label` varchar(191)  NOT NULL ,
`done` boolean  NOT NULL DEFAULT false,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201001130532
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,14 @@
+datasource db {
+  provider = "mysql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Task {
+  id    Int     @id @default(autoincrement())
+  label String
+  done  Boolean @default(false)
+}
```


