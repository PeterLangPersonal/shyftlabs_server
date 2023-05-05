import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../sequelize';

interface StudentsAttributes {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    firstName: string;
    familyName: string;
    dateOfBirth: Date;
};

export class Students extends Model<StudentsAttributes> implements StudentsAttributes {
    id!: number;
    firstName!: string;
    familyName!: string;
    dateOfBirth!: Date;
};

Students.init({
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
    firstName: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    familyName: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    dateOfBirth: {
        allowNull: false,
        type: DataTypes.DATE,
    },
}, {
    sequelize, modelName: 'students',
});