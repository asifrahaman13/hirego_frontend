import { people } from "@/constants/static/HeroSection/HeroSectionStatic";

export default function AllInternshipSeekers() {
  return (
    <div className="flex w-screen  flex-row">
      <div className="w-3/4 bg-gray-50 mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 px-12 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Title
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th>
                 
                </tr>
              </thead>
              <tbody className="divide-y b divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="h-11 w-11 flex-shrink-0">
                          <img className="h-11 w-11 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{person.name}</div>
                          <div className="mt-1 text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div className="text-gray-900">{person.title}</div>
                      <div className="mt-1 text-gray-500">{person.department}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{person.role}</td>
                  
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="ml-4 mb-0 sticky top-0 h-screen max-h-screen max-w-md  overflow-y-scroll no-scrollbar">
        <div className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis adipisci quia similique voluptatibus ducimus minima dolores, vel maiores. Non delectus perferendis molestias, ad facere
          sint fugit veritatis voluptatum voluptate ipsa fuga modi officia consequuntur nesciunt illum, ipsum repellendus excepturi, nostrum iure. Qui, error exercitationem nulla modi accusantium a
          odio voluptates. A, adipisci inventore? Laboriosam eius quia esse dignissimos temporibus, commodi, voluptas doloremque maiores molestias dolorum rem at asperiores, aut sunt facilis numquam
          minima! Asperiores sapiente deleniti inventore, possimus in molestiae aliquid dolore voluptates nisi iste a atque ipsum recusandae perferendis dolorum modi ullam nostrum vero voluptatum
          laudantium saepe odio repellendus distinctio. Quod neque consequuntur ratione molestias dicta officia aut vitae incidunt tempora distinctio minima accusamus, quos, rem odio at minus maiores
          repudiandae ut laborum, consequatur nulla aspernatur possimus? Quaerat officiis assumenda vel nisi aspernatur obcaecati nobis eligendi harum, sequi at quod. Cumque fugiat aliquid eaque
          dolores quia necessitatibus magni sed aperiam, reiciendis asperiores quasi libero neque ab illo accusantium sit tempora veritatis aliquam! Corporis unde quae mollitia aliquam exercitationem
          quas sunt rem voluptatem, ipsa earum expedita ex temporibus consequuntur illum molestiae quod, accusantium dignissimos nulla possimus a molestias id labore! Repudiandae ad maiores dolor
          natus reprehenderit officia eligendi sapiente mollitia. Deserunt fugiat nesciunt quo ducimus, magnam quod nobis. Iure minima delectus mollitia laudantium earum? Enim sit voluptatum accusamus
          vitae aliquam consequatur dicta cupiditate voluptates ipsam nemo reprehenderit dolor perferendis, provident adipisci quasi commodi odit est excepturi minima ea, natus, doloribus incidunt
          nulla neque! Maxime, aspernatur id ullam corporis ad veniam commodi incidunt itaque numquam, mollitia laborum, at dolores est neque? Culpa tenetur hic beatae. Fuga qui dolores quae quas ea
          sequi, reiciendis unde sint incidunt autem necessitatibus doloribus, nesciunt ducimus dolore maiores. Rem accusantium blanditiis at totam fugiat perferendis adipisci repudiandae neque quod
          nobis. Distinctio, ex neque architecto quod accusantium repudiandae animi alias voluptas molestias quam perspiciatis minima quo tenetur repellat ullam tempora unde saepe ipsam dolores nobis,
          commodi totam sequi quis! Minima consectetur sed quidem obcaecati magnam unde? Harum eius quos temporibus molestiae natus placeat eum, magnam eos modi quisquam exercitationem et quo rem
          molestias. Quidem, officiis voluptates. Optio illum obcaecati ullam aspernatur! Incidunt molestiae ducimus atque, repellat dolore modi ut tempora enim voluptatem similique aliquam sequi,
          asperiores sit adipisci quia, facere in. Suscipit, eius sequi! Autem, ad facere. Itaque eum enim, sunt accusantium voluptatibus voluptate aut vitae molestias, omnis earum in, unde eaque
          dolor placeat officia vel a id quo sit. A cumque autem beatae amet magnam obcaecati officia sint sed dolorum molestiae illum, alias voluptatum, nulla quos fuga asperiores animi reiciendis.
          Quaerat asperiores nisi odio quos quisquam, rerum at reprehenderit optio voluptas fugiat facere molestias aperiam perspiciatis culpa hic omnis ea officiis delectus ipsum modi esse iure,
          explicabo cum architecto? Doloremque atque, inventore amet quo aliquam mollitia quibusdam adipisci nesciunt, rerum cupiditate molestiae fugit. Modi beatae soluta sit iure voluptate.
          Doloremque, quasi fuga quis optio fugit est explicabo aliquam, accusantium nesciunt obcaecati laboriosam. Eveniet, voluptatum! Sunt ea laborum quas iure nostrum suscipit ad, obcaecati id
          exercitationem facere.
        </div>
      </div>
    </div>
  );
}
