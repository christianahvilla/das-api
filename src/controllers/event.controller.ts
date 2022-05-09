import Event, { EventInput, EventOutput } from '../models/event.model';

const create = async (payload: EventInput): Promise<EventOutput> => {
  const eventExists = await Event.findByPk(payload.id);
  if (eventExists) {
    throw new Error(`The event with the id ${payload.id} already exists`);
  }
  const event = await Event.create(payload);
  if (!event) {
    throw new Error('Something goes wrong creating the new event!');
  }
  return event;
};

const update = async (idEvent: string, payload: Partial<EventInput>): Promise<EventOutput> => {
  const event = await Event.findByPk(idEvent);
  if (!event) {
    throw new Error(`The event with the id ${idEvent} already exists`);
  }
  const updatedEvent = await (event as Event).update(payload);
  if (!updatedEvent) {
    throw new Error('Something goes wrong creating the new event!');
  }
  return updatedEvent;
};

const index = async (): Promise<EventOutput[]> => Event.findAll();

const getById = async (idEvent: string): Promise<EventOutput> => {
  const event = await Event.findByPk(idEvent);
  if (!event) {
    throw new Error(`The event with the id ${idEvent} already exists`);
  }
  return event;
};

const deleteById = async (idEvent: string): Promise<boolean> => {
  const event = await Event.findByPk(idEvent);
  if (!event) {
    throw new Error(`The event with the id ${idEvent} already exists`);
  }
  const deletedEvent = await Event.destroy({ where: { id: idEvent } });
  return !!deletedEvent;
};

export {
  create,
  update,
  index,
  getById,
  deleteById,
};
