db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);

db.users.createIndex({ user_id: 1 }, { unique: true });

db.topic_profiles.createIndex({ user_id: 1 }, { unique: true });
db.topic_profiles.createIndex({ "topics.name": 1 });
db.topic_profiles.createIndex({ "entityCategories.name": 1 });
db.topic_profiles.createIndex({ "entityCategories.entities.name": 1 });
