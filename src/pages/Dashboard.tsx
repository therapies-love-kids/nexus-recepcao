import { FaSearch } from "react-icons/fa";

export default function Dashboard() {

  return (
    <div className="flex justify-center items-center h-screen bg-base-300">
      <div className="card bg-base-100 w-4/5 h-4/5">
        <div className="card-body flex flex-row gap-4">

          <div className="flex flex-col gap-4 w-1/4 items-center">
            <img src="/svg/nexus-logo-dark.svg" alt="Nexus" className="w-36" />
            <button className="btn btn-ghost flex items-center gap-2">
              <FaSearch className="text-neutral-content" />
              Buscar pacientes
            </button>
          </div>
          <div className="divider divider-horizontal" />
          <div className="flex flex-col gap-4 w-3/4">
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <th>4</th>
                    <td>Marjy Ferencz</td>
                    <td>Office Assistant I</td>
                    <td>Maroon</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
