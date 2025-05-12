db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);

db.createCollection("users");
db.createCollection("aggregated_topic_attributes");
db.createCollection("topic_profiles");
