"use client"

import Head from 'next/head';
import { LatLngExpression } from 'leaflet';

import Section from "../components/Section";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Map from "../components/Map";

const DEFAULT_CENTER: LatLngExpression = [38.907132, -77.036546]

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js Leaflet Starter</title>
        <meta name="description" content="Create mapping apps with Next.js Leaflet Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container center={[]} zoom={0}>
          <h1>
            Next.js Leaflet Starter
          </h1>

          <Map width="800" height="400" center={DEFAULT_CENTER} zoom={12}>
            {({ TileLayer, Marker, Popup }: typeof import('react-leaflet') & typeof import('leaflet')) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>

          <p>
            Based on the <a href="https://github.com/colbyfayock/next-leaflet-starter">NextJS Leaflet Starter Project</a>, but with NextJS v15 and TypeScript.
          </p>
        </Container>
      </Section>
    </Layout>
  )
}
