import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../sequelize';

interface CoursesAttributes {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    courseName: string;
};

export class Courses extends Model<CoursesAttributes> implements CoursesAttributes {
    id!: number;
    courseName!: string;
};

Courses.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
    courseName: {
        allowNull: false,
        type: DataTypes.STRING,
    },
}, {
    sequelize, modelName: 'courses',
});