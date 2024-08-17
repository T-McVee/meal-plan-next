import { Skeleton } from "../ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";

interface IProps {
  colDefs: any[];
  rowData: any[];
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

function CardCustom(props: IProps) {
  const { colDefs, rowData, title, description, children } = props;

  return (
    <Card className="w-3/5 drop-shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        {!colDefs || !rowData ? (
          <Skeleton className="h-40 w-auto" />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                {colDefs.map((colDef, i) => (
                  <TableCell key={`${colDef.field}-${i}`}>
                    {colDef.field}
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rowData.map((row) => (
                <TableRow key={row.id}>
                  {colDefs.map((colDef, i) => (
                    <TableCell key={`${colDef.field}-${i}`}>
                      {row[colDef.field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>

      <CardFooter>{children ? children : undefined}</CardFooter>
    </Card>
  );
}

export default CardCustom;
