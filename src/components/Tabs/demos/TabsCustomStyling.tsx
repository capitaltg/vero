import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';

export const TabsCustomStyling = () => (
  <Tabs defaultValue="tab1" className="w-md">
    <TabsList className="grid w-full grid-cols-3 border-none bg-base-200 text-black">
      <TabsTrigger
        value="tab1"
        className="hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400"
      >
        Favorites
      </TabsTrigger>
      <TabsTrigger
        value="tab2"
        className="hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400"
      >
        Calls
      </TabsTrigger>
      <TabsTrigger
        value="tab3"
        className="hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400"
      >
        Contacts
      </TabsTrigger>
    </TabsList>
    <TabsContent value="tab1" className="mt-2 min-h-40 rounded bg-base-200 p-4">
      <h3 className="text-lg font-medium">Favorites Tab</h3>
      <p className="text-sm text-muted-foreground">Content for the first tab.</p>
    </TabsContent>
    <TabsContent value="tab2" className="mt-2 min-h-40 rounded bg-base-200 p-4">
      <h3 className="text-lg font-medium">Calls Tab</h3>
      <p className="text-sm text-muted-foreground">Content for the second tab.</p>
    </TabsContent>
    <TabsContent value="tab3" className="mt-2 min-h-40 rounded bg-base-200 p-4">
      <h3 className="text-lg font-medium">Contacts Tab</h3>
      <p className="text-sm text-muted-foreground">Content for the third tab.</p>
    </TabsContent>
  </Tabs>
);
