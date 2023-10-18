import useEvents from "./useEvents";

test("get all events", () => {
  const getEvents = useEvents();
  const events = getEvents();
  expect(events).toHaveLength(5);
});

test("get one event", () => {
  const getEvents = useEvents();
  const event = getEvents(1);
  expect(event.title).toBe("Sustenance, The Under the Moon Tour");
});

test("return event not found", () => {
  const getEvents = useEvents();
  const event = getEvents(100);
  expect(event).toBeInstanceOf(Error);
});
