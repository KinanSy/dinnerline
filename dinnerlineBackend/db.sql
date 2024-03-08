CREATE TABLE `t_user` (
    `UserId` INT NOT NULL AUTO_INCREMENT,
    `Firstname` VARCHAR(255),
    `Lastname` VARCHAR(255),
    `Email` VARCHAR(255),
    `Password` TEXT,
    `PhoneNumber` VARCHAR(255),
    `IsCollaborator` INT,
    UNIQUE KEY `User_index` (`UserId`) USING BTREE
);

CREATE TABLE `t_meal` (
    `MealId` INT NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(255),
    `Description` VARCHAR(500),
    `Content` TEXT,
    `Price` FLOAT,
    `ImageUrl` VARCHAR(500),
    `MealCategoryId` INT,
    UNIQUE KEY `Meal_index` (`MealId`) USING BTREE
);

CREATE TABLE `t_order` (
    `OrderId` INT NOT NULL AUTO_INCREMENT,
    `UserId` int,
    `Date` VARCHAR(255),
    `StatusId` int,
    UNIQUE KEY `Order_index` (`OrderId`) USING BTREE
);

CREATE TABLE `t_ingredient` (
    `IngredientId` INT NOT NULL AUTO_INCREMENT,
    `UserId` int,
    `Name` VARCHAR(255),
    `Description` VARCHAR(500),
    `Stock` float,
    `QuantityTypeId` int,
    UNIQUE KEY `Ingredient_index` (`IngredientId`) USING BTREE
);

CREATE TABLE `t_ordercontents` (
    `OrderContentsId` INT NOT NULL AUTO_INCREMENT,
    `OrderId` int,
    `MealId` int,
    UNIQUE KEY `OrderContents_index` (`OrderContentsId`) USING BTREE
);

CREATE TABLE `t_calendarday` (
    `CalendarDayId` INT NOT NULL AUTO_INCREMENT,
    `Date` VARCHAR(255),
    `MealId` int,
    UNIQUE KEY `CalendarDay_index` (`CalendarDayId`) USING BTREE
);

CREATE TABLE `t_mealcontent` (
    `MealContentId` INT NOT NULL AUTO_INCREMENT,
    `MealId` int,
    `IngredientId` int,
    `Quantity` float,
    UNIQUE KEY `MealContent_index` (`MealContentId`) USING BTREE
);

CREATE TABLE `t_mealcontent` (
    `MealContentId` INT NOT NULL AUTO_INCREMENT,
    `MealId` int,
    `IngredientId` int,
    `Quantity` float,
    UNIQUE KEY `MealContent_index` (`MealContentId`) USING BTREE
);

CREATE TABLE `t_mealtags` (
    `MealTagId` INT NOT NULL AUTO_INCREMENT,
    `TagId` int,
    `MealId` int,
    UNIQUE KEY `MealTag_index` (`MealTagId`) USING BTREE
);

CREATE TABLE `t_quantitytype` (
    `QuatityTypeId` INT NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(255),
    `Unit` VARCHAR(255),
    UNIQUE KEY `QuatityType_index` (`QuatityTypeId`) USING BTREE
);

CREATE TABLE `t_status` (
    `StatusId` INT NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(255),
    `Description` VARCHAR(255),
    UNIQUE KEY `Status_index` (`StatusId`) USING BTREE
);

CREATE TABLE `t_mealcategory` (
    `MealCategoryId` INT NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(255),
    `Description` VARCHAR(255),
    UNIQUE KEY `MealCategory_index` (`MealCategoryId`) USING BTREE
);

CREATE TABLE `t_tag` (
    `TagId` INT NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(255),
    `Description` VARCHAR(255),
    UNIQUE KEY `Tag_index` (`TagId`) USING BTREE
);

