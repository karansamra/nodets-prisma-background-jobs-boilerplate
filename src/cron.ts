import {
  eventsProducer,
  upcomingEventProducer,
} from './v1.0.0/producers/eventProducer';
import './v1.0.0/workers/eventWorker';
const CronJob = require('cron').CronJob;
const timeZone = process.env.TIME_ZONE as string;
/**
 * This cron job is scheduled to run at 23:00 (11 PM) on the 25th of August every year.
 *
 * Cron Pattern Breakdown:
 * ┌─────────────── second (0 - 59)
 * │  ┌──────────── minute (0 - 59)
 * │  │  ┌───────── hour (0 - 23)
 * │  │  │  ┌────── day of the month (1 - 31)
 * │  │  │  │  ┌─── month (1 - 12, or names)
 * │  │  │  │  │  ┌ day of the week (0 - 7) (0 or 7 is Sunday)
 * │  │  │  │  │  │
 * │  │  │  │  │  │
 * 0  0  23 25 8  *
 *
 * This job executes the `createCommitmentData` function to perform any required
 * yearly commitments data creation tasks.
 */

const eventsCron = new CronJob(
  '0 0 23 25 8 *',
  async function () {
    try {
      await eventsProducer();
      await upcomingEventProducer();
    } catch (e) {
      console.error(e);
    }
  },
  null,
  true,
  timeZone
);
