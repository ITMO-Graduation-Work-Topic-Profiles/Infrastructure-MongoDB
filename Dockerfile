FROM mongo

COPY scripts/initialization/ /docker-entrypoint-initdb.d/
