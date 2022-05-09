import { DataTypes, Model, Optional } from 'sequelize';
import db from '../database/connection';

interface UserAttributes {
  id?: string,
  name: string,
  last_name: string,
  email: string,
  phone: string,
  role?: string,
  email_verified_at?: Date,
  password: string,
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, 'id' | 'role' | 'email_verified_at'> {}
export interface UserOutput extends Optional<UserAttributes, 'password'> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: string;

  public name!: string;

  public last_name!: string;

  public email!: string;

  public phone!: string;

  public role!: string;

  public email_verified_at!: Date;

  public password!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public readonly deletedAt!: Date;

  dataValues: any;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: 'email',
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      unique: 'phone',
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'Admin',
      allowNull: false,
    },
    email_verified_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    sequelize: db,
    paranoid: true,
  },
);

export default User;
