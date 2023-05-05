import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../sequelize';
import { Students } from '../students';
import { Courses } from '../courses';

interface ResultsAttributes {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    score: string;
    studentId: number;
    courseId: number;
};

export class Results extends Model<ResultsAttributes> implements ResultsAttributes {
    score!: string;
    studentId!: number;
    courseId!: number;
};

Results.init({
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
    score: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    studentId: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    courseId: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
}, {
    sequelize, modelName: 'results',
});

Students.hasMany(Results);
Courses.hasMany(Results);
Results.belongsTo(Students);
Results.belongsTo(Courses);