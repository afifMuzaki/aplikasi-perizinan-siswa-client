import React from "react";
import { Page, View, Text, Document, StyleSheet, Line } from "@react-pdf/renderer";
import Html from "react-pdf-html";
// import axios from "axios";

const IzinCetak = () => {
    const styles = StyleSheet.create({
        heading: {
            textAlign: 'center!important',
            marginTop: '1rem!important',
            marginBottom: '1rem!important',
        },
        title: {
            fontWeight: '600!important',
            fontSize: '1.25rem!important',
            marginRight: '1.5rem!important',
            marginBottom: '.5rem',
            display: 'inline-block'
        },
        data: {
            fontSize: 'calc(1.3rem + .6vw)!important',
            marginBottom: '.5rem',
            display: 'inline-block'
        },
        div: {
            marginTop: '1.5rem!important',
            marginBottom: '1.5rem!important',
            borderBottomWidth: '1px',
            borderBottomColor: 'black',
            boxShadow: ' 0 .125rem .25rem rgba(0,0,0,.075)!important',
            flex: '0 0 auto',
            width: '100%'
        }
    })

    return (
        <Document>
            <Page>
                <View>
                    <Text style={styles.heading}>Surat Izin Keluar 1</Text>
                    <Text style={styles.title}>Nama :</Text>
                    <Text style={styles.data}>M. Afif Muzaki</Text>
                    <Text style={styles.title}>NIS :</Text>
                    <Text style={styles.data}>2324/35845</Text>
                </View>
            </Page>
        </Document>
    );
};

export default IzinCetak;