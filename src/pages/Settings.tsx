
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings as SettingsIcon } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <SettingsIcon className="h-6 w-6" /> Paramètres
        </h1>
        <p className="text-gray-500">Configuration du système GAMMA3</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Général</TabsTrigger>
          <TabsTrigger value="classification">Classification</TabsTrigger>
          <TabsTrigger value="storage">Stockage</TabsTrigger>
          <TabsTrigger value="system">Système</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informations Générales</CardTitle>
              <CardDescription>
                Paramètres généraux du système de gestion des stocks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Nom de l'Organisation</h4>
                <p className="text-sm text-muted-foreground">GAMMA3 - Gestion Avancée des Matériels Militaires et Approvisionnements</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Version du système</h4>
                <p className="text-sm text-muted-foreground">1.0.0</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Dernière mise à jour</h4>
                <p className="text-sm text-muted-foreground">05/05/2025</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Mettre à jour</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configuration des Alertes</CardTitle>
              <CardDescription>
                Paramétrez les seuils d'alerte pour le suivi des stocks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Email notifications</h4>
                <p className="text-sm text-muted-foreground">Activer les alertes par email pour les articles en rupture de stock</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Fréquence des rapports</h4>
                <p className="text-sm text-muted-foreground">Hebdomadaire</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Configurer les Alertes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="classification" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gestion de la Nomenclature</CardTitle>
              <CardDescription>
                Configuration des classes, sous-classes, familles et sous-familles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Les paramètres de nomenclature permettent de classifier les articles selon la hiérarchie établie par l'EMAM/BL.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Gérer les Classifications</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="storage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Emplacements de Stockage</CardTitle>
              <CardDescription>
                Configuration des magasins, sections, rayons, étagères et casiers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                La gestion des emplacements permet d'organiser physiquement le stockage des articles.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Gérer les Emplacements</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configuration Système</CardTitle>
              <CardDescription>
                Paramètres avancés du système
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Ces paramètres affectent le fonctionnement global de l'application GAMMA3.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Paramètres Avancés</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
