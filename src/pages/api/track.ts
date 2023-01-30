import type { NextApiRequest, NextApiResponse } from 'next'

import facebookEventFetch from '@/lib/facebook'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { eventID, eventName, urlLocation, fbp, fbc } = JSON.parse(req.body)
    // console.log(req, eventName, urlLocation, fbp, fbc);
    facebookEventFetch(req, eventID, eventName, urlLocation, fbp, fbc)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Error while tracking', e)
  } finally {
    res.end()
  }
}
