CREATE TABLE User(
	userId VARCHAR(20) PRIMARY KEY,
	password VARCHAR(20) NOT NULL,
	timeCreated DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Request(
	requestId INT AUTO_INCREMENT PRIMARY KEY,
	requesterId VARCHAR(20) NOT NULL,
	providerId VARCHAR(20),
	title VARCHAR(20) NOT NULL,
	latitude DECIMAL(8,6) NOT NULL,
	longitude DECIMAL(8,6) NOT NULL,
	address VARCHAR(40) NOT NULL,
	description VARCHAR(20) NOT NULL,
	accepted DATETIME,
	confirmed DATETIME,
	completed DATETIME,
	timeStart DATETIME NOT NULL,
	timeEnd DATETIME NOT NULL,
	timeCreated DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE MessageSession(
	messageSessionId INT AUTO_INCREMENT PRIMARY KEY,
	userId1 VARCHAR(20) NOT NULL,
	userId2 VARCHAR(20) NOT NULL,
	FOREIGN KEY(userId1) REFERENCES User(userId),
	FOREIGN KEY(userId2) REFERENCES User(userId),
);

CREATE TABLE Message(
	messageId INT AUTO_INCREMENT PRIMARY KEY,
	messageSessionId INT NOT NULL,
	senderId VARCHAR(20) NOT NULL,
	receiverId VARCHAR(20) NOT NULL,
	content VARCHAR(500) NOT NULL,
	timeCreated DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(messageSessionId) REFERENCES MessageSession(messageSessionId),
	FOREIGN KEY(senderId) REFERENCES User(userId),
	FOREIGN KEY(receiverId) REFERENCES User(userId),
);
