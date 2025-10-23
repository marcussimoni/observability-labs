-- ==========================================================
-- Custom PostgreSQL initialization script
-- ==========================================================
CREATE USER emailsenderuser WITH PASSWORD 'emailsenderpassword';

CREATE DATABASE emailsenderdb
    WITH OWNER = emailsenderuser
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TEMPLATE = template0;

GRANT ALL PRIVILEGES ON DATABASE emailsenderdb TO emailsenderuser;

\connect emailsenderdb;

CREATE SCHEMA IF NOT EXISTS emailsender AUTHORIZATION emailsenderuser;

GRANT ALL ON SCHEMA emailsender TO emailsenderuser;