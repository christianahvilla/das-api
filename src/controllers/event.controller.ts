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

const update = async (idEvent: string, payload: Partial<EventInput>): Promise<EventOutput> => {
  const event = await Event.findByPk(idEvent);
  if (!event) {
    throw new Error(`The event with the id ${payload.id} already exists`);
  }
  const { dataValues } = await (event as Event).update(payload);
  if (!dataValues) {
    throw new Error('Something goes wrong creating the new event!');
  }
  return dataValues;
};

export {
  create,
  update,
};
