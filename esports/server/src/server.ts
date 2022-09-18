// const express = require('express') forma antiga de importar o express
import express from 'express'
import cors from "cors"
import { PrismaClient } from '@prisma/client'
import { conevertHourStringToMinutes } from './utils/convert-hour-string-to-minutes'
import { convertMinutesToHoursString } from './utils/convert-minutes-to-hours-string'

const app = express()
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient({
   log: ['query']
})

app.get('/games', async (request, response) => {
   const games = await prisma.game.findMany({
      include: {
         _count: {
            select: {
               ads: true
            }
         }
      }
   })
   return response.json(games)
})
app.post('/games/:id/ads', async (request, response) => {
   const gameId = request.params.id
   const body: any = request.body

   const ad = await prisma.ad.create({
      data: {
         gameId,
         name: body.name,
         yearsPlaying: body.yearsPlaying,
         discord: body.discord,
         weekDays: body.weekDays.join(','),
         hourStart:conevertHourStringToMinutes( body.hourStart),
         hourEnd: conevertHourStringToMinutes(body.hourEnd),
         useVoiceChannel: body.useVoiceChannel
      }

   })
   return response.status(201).json(ad)
})


// usar async porque a resposta pode demorar um pouco
app.get('/games/:id/ads', async (request, response) => {

   const gameId = request.params.id

   const ads = await prisma.ad.findMany({
      select: {
         id: true,
         name: true,
         weekDays: true,
         useVoiceChannel: true,
         yearsPlaying: true,
         hourStart: true,
         hourEnd: true,
      },
      where: {
         gameId
      },
      orderBy: {
         createAt: 'desc',
      }
   })

   return response.json(ads.map((ad) => {
      return {
         ...ad,
         weekDays: ad.weekDays.split(','),
         hourStart: convertMinutesToHoursString(ad.hourStart),
         hourEnd: convertMinutesToHoursString(ad.hourEnd)
      }
   }))
   //  return response.json([
   //      {
   //         id: 1,
   //         name:"Anúncio" 
   //      },
   //      {
   //         id: 2,
   //         name:"Anúncio 2" 
   //      },
   //      {
   //         id: 3,
   //         name:"Anúncio 3" 
   //      },
   //      {
   //         id: 4,
   //         name:"Anúncio 4" 
   //      }
   //  ])
})


app.get('/ads/:id/discord', async (request, response) => {

   const adId = request.params.id
   const ad = await prisma.ad.findUniqueOrThrow({
      select: {
         discord: true
      },
      where: {
         id: adId
      }
   })

   return response.json({
      discord: ad.discord
   })
})

app.listen(3003)