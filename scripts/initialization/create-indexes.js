db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);

db.users.createIndex({ user_id: 1 }, { unique: true });

db.topic_profiles.createIndex({ user_id: 1 }, { unique: true });
db.topic_profiles.createIndex({ "keywords.name": 1 });
db.topic_profiles.createIndex({ "entities.category": 1 });
db.topic_profiles.createIndex({ "entities.name": 1 });
db.topic_profiles.createIndex({ "sentiments.name": 1 });
