db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);

db.users.createIndex({ user_id: 1 }, { unique: true });

db.topic_profiles.createIndex({ user_id: 1 }, { unique: true });
db.topic_profiles.createIndex({ "topic_attributes.keywords.name": 1 });
db.topic_profiles.createIndex({ "topic_attributes.entities.category": 1 });
db.topic_profiles.createIndex({ "topic_attributes.entities.name": 1 });
db.topic_profiles.createIndex({ "topic_attributes.sentiments.name": 1 });
