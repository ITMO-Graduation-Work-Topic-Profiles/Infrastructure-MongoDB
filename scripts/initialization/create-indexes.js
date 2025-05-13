db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);

db.users.createIndex({ user_id: 1 }, { unique: true });

db.aggregated_topic_attributes.createIndex({ user_id: 1 }, { unique: true });
db.aggregated_topic_attributes.createIndex({ "keywords.name": 1 });
db.aggregated_topic_attributes.createIndex({ "entities.category": 1 });
db.aggregated_topic_attributes.createIndex({ "entities.name": 1 });
db.aggregated_topic_attributes.createIndex({ "sentiments.name": 1 });

db.topic_profiles.createIndex({ user_id: 1 }, { unique: true });
db.topic_profiles.createIndex({ "topics.labels.name": 1 });
db.topic_profiles.createIndex({ "topics.words.name": 1 });
