import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        textDecoration: 'underline',
    },
    section: {
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        fontSize: 12,
        marginBottom: 3,
    },
    terms: {
        fontSize: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    signature: {
        marginTop: 30,
    },
});

const ContractPDF = ({ userData, vehicleData, invoiceData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.title}>CONTRAT DE LOCATION DE VÉHICULE</Text>

            <View style={styles.section}>
                <Text style={styles.text}>Entre les soussignés :</Text>
                <Text style={styles.text}>La société de location AUTO RENT, ci-après dénommée "le loueur"</Text>
                <Text style={styles.text}>Et</Text>
                {/* <Text style={styles.text}>{userData.prenom} {userData.nom}, ci-après dénommé "le locataire"</Text> */}
            </View>

            {/* <View style={styles.section}>
                <Text style={styles.sectionTitle}>1. INFORMATIONS CLIENT</Text>
                <Text style={styles.text}>Nom: {userData.nom}</Text>
                <Text style={styles.text}>Prénom: {userData.prenom}</Text>
                <Text style={styles.text}>Email: {userData.email}</Text>
                <Text style={styles.text}>Téléphone: {userData.telephone}</Text>
                <Text style={styles.text}>Adresse: {userData.adresse}</Text>
            </View> */}

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>2. VÉHICULE LOUÉ</Text>
                <Text style={styles.text}>Marque: {vehicleData.marque}</Text>
                <Text style={styles.text}>Modèle: {vehicleData.modele}</Text>
                <Text style={styles.text}>Type de carburant: {vehicleData.type}</Text>
                <Text style={styles.text}>Transmission: {vehicleData.transmission}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>3. CONDITIONS DE LOCATION</Text>
                <Text style={styles.text}>Début de location: {format(new Date(invoiceData.dateRange.from), 'dd MMMM yyyy', { locale: fr })}</Text>
                <Text style={styles.text}>Fin de location: {format(new Date(invoiceData.dateRange.to), 'dd MMMM yyyy', { locale: fr })}</Text>
                <Text style={styles.text}>Prix journalier: {invoiceData.price}€</Text>
                <Text style={styles.text}>Montant total: {invoiceData.totalPrice}€</Text>
            </View>

            <View style={styles.terms}>
                <Text style={styles.sectionTitle}>4. CONDITIONS GÉNÉRALES</Text>
                <Text style={styles.text}>4.1 Le locataire s'engage à :</Text>
                <Text style={styles.text}>- Utiliser le véhicule en bon père de famille</Text>
                <Text style={styles.text}>- Ne pas sous-louer le véhicule</Text>
                <Text style={styles.text}>- Restituer le véhicule dans l'état de la prise en charge</Text>
                <Text style={styles.text}>- Signaler immédiatement tout incident ou accident</Text>

                <Text style={styles.text}>4.2 Assurance :</Text>
                <Text style={styles.text}>Le véhicule est couvert par une assurance tous risques avec une franchise de 1000€.</Text>

                <Text style={styles.text}>4.3 Carburant :</Text>
                <Text style={styles.text}>Le véhicule est fourni avec le plein et doit être restitué avec le plein.</Text>

                <Text style={styles.text}>4.4 Retard et annulation :</Text>
                <Text style={styles.text}>Tout retard de restitution sera facturé au tarif journalier majoré de 50%.</Text>
            </View>

            <View style={styles.signature}>
                <Text style={styles.text}>Fait à _________________, le {format(new Date(), 'dd MMMM yyyy', { locale: fr })}</Text>
                <Text style={styles.text}>Le loueur:</Text>
                <Text style={styles.text}>_______________________</Text>
                <Text style={styles.text}>Le locataire:</Text>
                <Text style={styles.text}>_______________________</Text>
            </View>
        </Page>
    </Document>
);

const ContractButton = () => {
    // const userData = JSON.parse(localStorage.getItem("userData"));
    const selectedCar = JSON.parse(localStorage.getItem("selectedCar"));

    const contractData = {
        // userData,
        vehicleData: selectedCar,
        invoiceData: {
            dateRange: selectedCar.dateRange,
            price: selectedCar.tarif,
            totalPrice: calculateTotalPrice(selectedCar.dateRange, selectedCar.tarif)
        }
    };

    return (
        <PDFDownloadLink
            document={<ContractPDF {...contractData} />}
            fileName={`contrat_location_${format(new Date(), 'dd-MM-yyyy')}.pdf`}
            className="px-6 mt-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
            {({ loading }) =>
                loading ? 'Génération du contrat...' : 'Télécharger le contrat'
            }
        </PDFDownloadLink>
    );
};

const calculateTotalPrice = (dateRange, dailyPrice) => {
    const start = new Date(dateRange.from);
    const end = new Date(dateRange.to);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return days * dailyPrice;
};

export default ContractButton;