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
	location VARCHAR(20) NOT NULL,
	description VARCHAR(20) NOT NULL,
	timeStart DATETIME NOT NULL,
	timeEnd DATETIME NOT NULL,
	timeCreated DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Message(
	messageId INT AUTO_INCREMENT PRIMARY KEY,
	senderId VARCHAR(20) NOT NULL,
	receiverId VARCHAR(20) NOT NULL,
	timeCreated DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(senderId) REFERENCES User(userId),
	FOREIGN KEY(receiverId) REFERENCES User(userId)
);
