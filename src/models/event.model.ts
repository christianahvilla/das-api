import { DataTypes, Model, Optional } from 'sequelize';
import db from '../database/connection';

interface EventAttributes {
  id?: string;
  patient: string;
  treatment: string;
  start_date: String;
  start_hour: String;
  end_date: String;
  end_hour: String;
  notes?: String;
  color: String;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface EventInput extends Optional<EventAttributes, 'id' | 'notes'> {}
export interface EventOutput extends Required<EventAttributes> {}

class Event extends Model<EventAttributes, EventInput> implements EventAttributes {
  public id!: string;

  public patient!: string;

  public treatment!: string;

  public start_date!: String;

  public start_hour!: String;

  public end_date!: String;

  public end_hour!: String;

  public notes!: String;

  public color!: String;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public readonly deletedAt!: Date;
}

Event.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    patient: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    treatment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_hour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    end_hour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING,
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

export default Event;
