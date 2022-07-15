CREATE Table
    Post (
        id VARCHAR(255) PRIMARY KEY,
        photo VARCHAR(255) not null,
        description TEXT NOT NULL ,
        date_create Date,
        role enum ("NORMAL",  "EVENTO ")
    )