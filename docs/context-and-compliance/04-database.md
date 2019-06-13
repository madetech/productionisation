# 4 - Database

## 4.1 Production database

### 4.1.1 Automatic failover

#### Context & justification

Automatic failover is the process of automatically moving the primary database to a standby/secondary database. This is necessary for when the primary system becomes unavailable through failure or scheduled downtime.

#### Compliance

* [ ] Production database has automatic failover

### 4.1.2 Daily automatic backups

#### Context & justification

In the case of downtime, an error (human, random and/or systematic) and prevention of loss of data, it is important to conduct daily backups which are automated. Some of the benefits include; simplifying process of migration, reverse problems during updates and data protection.

#### Compliance

* [ ] Production database has daily automatic backups

### 4.1.3 If feasible with provider, enable transaction log backups for PIT (Point in Time) restore ability

#### Context & justification

Data is first written to the transaction log and upon completion, it is then written to the data file. When a transaction log is being restored, the database server will replay all the transactions, however having this feature enabled gives the ability to choose where to stop reading transactions that need to be restored, hence Point in Time (PIT) restore.

_Note_: Depending on provider, if the database is using the bulk-logged recovery model and there is a _minimally_ logged operation, a PIT restore will not be available for that particular transaction log.

#### Compliance

* [ ] Production database has enabled transaction log backups for PIT restore ability
