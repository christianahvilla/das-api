import Event, { EventInput, EventOutput } from '../models/event.model';

const create = async (payload: EventInput): Promise<EventOutput> => {
  const eventExists = await Event.findByPk(payload.id);
  if (eventExists) {
    throw new Error(`The event with the id ${payload.id} already exists`);
  }
  const { dataValues } = await Event.create(payload);
  if (!dataValues) {
    throw new Error('Something goes wrong creating the new event!');
  }
  return dataValues;
};

const update = () => {

};

export {
  create,
  update,
};
