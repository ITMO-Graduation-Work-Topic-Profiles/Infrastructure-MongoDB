db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);

db.users.createIndex({ user_id: 1 }, { unique: true });

db.topic_attributes.createIndex({ user_id: 1 }, { unique: true });
db.topic_attributes.createIndex({ "keywords.name": 1 });
db.topic_attributes.createIndex({ "entities.category": 1 });
db.topic_attributes.createIndex({ "entities.name": 1 });
db.topic_attributes.createIndex({ "sentiments.name": 1 });
