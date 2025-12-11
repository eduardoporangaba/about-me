import { useState, useEffect } from "react";
import {
  topDiv,
  containerModel1,
  menuItem,
  translucentBox,
  loadingBox,
  loadingLabel,
  translucentContainer,
} from "../src/styles/containers/containers";
import setDimensions from "../src/dimensions/default.dimensions";
import { stylesColor } from "../src/styles/colors/styles.color";
import { logout, resultFetch } from "../src/utils/dafaults.fn";
import { formatCpfCnpj } from "../src/utils/formatters/formatters";
import jwt from "jsonwebtoken";

export async function getServerSideProps(context) {
  const userAgent = context.req.headers["user-agent"] || "indisponível";
  const isMobile =
    /android|iphone|ipad|ipod|blackberry|opera mini|iemobile|mobile/i.test(
      userAgent.toLowerCase()
    );

  // Get token from cookies
  const token = context.req.cookies?.token || null;
  let user = null;

  if (token) {
    try {
      // This will give you: { id, email, role, name }
      user = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      user = null;
    }
  }
  return { props: { isMobile, userAgent, user } };
}

async function resumeSales(
  setSales,
  setLastSales,
  setAllSales,
  setFilteredSale
) {
  const salesRes = await fetch("/api/get/resume/sales");
  const sales = await resultFetch(salesRes);

  const allSalesRes = await fetch("/api/get/all_sales");
  const allSales = await resultFetch(allSalesRes);

  console.log(sales);
  await setLastSales(sales);
  await setSales(sales);
  await setAllSales(allSales);
  await setFilteredSale(allSales);
}

async function openSale(setLoading, id) {
  console.log(id);
  setLoading(true);

  const saleRes = await fetch(`/api/get/resume/open_budget?id=${id}`);
  const sale = await resultFetch(saleRes);

  console.log(sale);

  setLoading(false);
}

async function filterSales(
  setSales,
  setFilteredSale,
  filteredSale,
  id,
  key,
  lastSales,
  allSales
) {
  const element = document.getElementById(id);
  let elementValue = element.value;
  let filter = [];

  if (elementValue === "") {
    await setSales(lastSales);
    await setFilteredSale(allSales);
    return;
  }

  if (id === "date") {
    const [year, month, day] = elementValue.split("-");
    let formattedDate = `${day}/${month}/${year}`;
    filter = allSales.filter((ft) => {
      return String(ft[key]).includes(formattedDate);
    });
  } else if (id === "cpf_cnpj_filter") {
    // Remove a máscara do valor do input e do valor do banco de dados para a comparação
    const cleanElementValue = elementValue.replace(/[.\-/]/g, "");
    filter = filteredSale.filter((ft) => {
      const cleanDbValue = String(ft[key]).replace(/[.\-/]/g, "");
      return cleanDbValue.includes(cleanElementValue);
    });
  } else {
    // Para outros campos (id, client_name)
    filter = filteredSale.filter((ft) => {
      return String(ft[key]).toLowerCase().includes(elementValue.toLowerCase());
    });
  }

  await setSales(filter);
  await setFilteredSale(filter);
}

async function encodeId(id, setSaleId) {
  const hashID = Buffer.from(String(id))
    .toString("base64") // base64 padrão
    .replace(/\+/g, "-") // troca + por -
    .replace(/\//g, "_") // troca / por _
    .replace(/=+$/, ""); // remove padding (=)
  setSaleId(hashID);
  console.log("ID codificado:", hashID);
}

export default function home(props) {
  const [loading, setLoading] = useState(false);
  const [module, setModule] = useState(1);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [dataSelecionada, setDataSelecionada] = useState("");
  const [lastSales, setLastSales] = useState("");
  const [sales, setSales] = useState("");
  const [allSales, setAllSales] = useState("");
  const [filteredSale, setFilteredSale] = useState("");
  const [saleZoom, setSaleZoom] = useState(false);
  const [saleId, setSaleId] = useState("");
  const [cpfCnpjFilterValue, setCpfCnpjFilterValue] = useState("");

  const dimensions = setDimensions(props.isMobile);
  const tpDiv = topDiv(dimensions);
  const lgBox = loadingBox(dimensions);
  const lgLabel = loadingLabel(dimensions);
  const flexContainer = containerModel1(dimensions);
  const trContainer = translucentContainer(dimensions);
  const trBox = translucentBox(dimensions);
  const mnItem = menuItem(dimensions);

  const logoutImg = {
    backgroundImage: "url('/icons/logout.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: props.isMobile ? "30px" : "50px",
    height: props.isMobile ? "30px" : "50px",
    marginRight: props.isMobile ? "10px" : "20px",
  };

  const homeImg = {
    backgroundImage: "url('/icons/icon1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: props.isMobile ? "30px" : "50px",
    height: props.isMobile ? "30px" : "50px",
    marginLeft: props.isMobile ? "10px" : "20px",
  };

  const mainBkgImage = {
    backgroundImage: "url('/images/background/model6.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
  };

  const salesImage = {
    backgroundImage: "url('/icons/sales2.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    width: props.isMobile ? "30px" : "50px",
    height: props.isMobile ? "30px" : "50px",
    boxSizing: "border-box",
  };

  const searchSales = {
    backgroundImage: "url('/icons/search.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    width: props.isMobile ? "40px" : "50px",
    height: props.isMobile ? "40px" : "50px",
    boxSizing: "border-box",
  };

  const settings = {
    backgroundImage: "url('/icons/setings.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    width: props.isMobile ? "30px" : "50px",
    height: props.isMobile ? "30px" : "50px",
    boxSizing: "border-box",
  };

  const problem = {
    backgroundImage: "url('/icons/Problema.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    width: props.isMobile ? "30px" : "50px",
    height: props.isMobile ? "30px" : "50px",
    boxSizing: "border-box",
  };

  const scImage = {
    backgroundImage: "url('/icons/structure_handler.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    width: props.isMobile ? "40px" : "50px",
    height: props.isMobile ? "40px" : "50px",
    boxSizing: "border-box",
  };

  const userImage = {
    backgroundImage: "url('/icons/user.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    width: props.isMobile ? "40px" : "50px",
    height: props.isMobile ? "40px" : "50px",
    boxSizing: "border-box",
  };

  const pcp = {
    backgroundImage: "url('/icons/pcp.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    width: props.isMobile ? "30px" : "50px",
    height: props.isMobile ? "30px" : "50px",
    boxSizing: "border-box",
  };

  const quality = {
    backgroundImage: "url('/icons/quality.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    width: props.isMobile ? "30px" : "50px",
    height: props.isMobile ? "30px" : "50px",
    boxSizing: "border-box",
  };

  const device = {
    backgroundImage: "url('/icons/device.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    width: props.isMobile ? "30px" : "50px",
    height: props.isMobile ? "30px" : "50px",
    boxSizing: "border-box",
  };

  const infra = {
    backgroundImage: "url('/icons/infra.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    width: props.isMobile ? "30px" : "50px",
    height: props.isMobile ? "30px" : "50px",
    boxSizing: "border-box",
  };

  const support = {
    backgroundImage: "url('/icons/support.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    width: props.isMobile ? "30px" : "50px",
    height: props.isMobile ? "30px" : "50px",
    boxSizing: "border-box",
  };

  const budget = {
    backgroundImage: "url('/icons/budget.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    width: props.isMobile ? "40px" : "50px",
    height: props.isMobile ? "40px" : "50px",
    boxSizing: "border-box",
  };

  const editImg = {
    backgroundImage: "url('/icons/editar.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    width: props.isMobile ? "40px" : "50px",
    height: props.isMobile ? "40px" : "50px",
    boxSizing: "border-box",
  };

  const baseDateInputStyles = {
    height: dimensions.boxFilterEl.height,
    lineHeight: "1.2",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "0 12px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: "16px",
    color: "#333",
    backgroundColor: "#fcfcfc",
    transition: "all 0.3s ease-in-out",
    outline: "none",
    cursor: "pointer",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
  };

  const st_topDiv = {
    display: "flex",
    color: "white",
    backgroundColor: stylesColor.dark.blue1,
    height: props.isMobile ? "50px" : "60px",
    justifyContent: "center",
    alignItems: "center",
  };

  const st_homeBtn = {
    ...homeImg,
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  };

  const st_logoutBtn = {
    ...logoutImg,
    width: "40px",
    height: "40px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  };

  const st_sidebarDiv = {
    display: "flex",
    width: props.isMobile ? "70px" : "250px",
    backgroundColor: "#010B40",
    flexDirection: "column",
  };

  const st_translucedDiv = {
    justifyContent: props.isMobile ? "flex-start" : "center",
    alignItems: "top",
    display: "flex",
    flexDirection: props.isMobile ? "column" : "row",
    flexWrap: "wrap",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(3px)",
    color: "white",
    boxSizing: "border-box",
    borderRadius: "20px",
    margin: props.isMobile ? "15px" : "30px",
    padding: props.isMobile ? "15px" : "30px",
    flex: 1,
  };

  const st_translucedBox = {
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(3px)",
    color: "white",
    boxSizing: "border-box",
    borderRadius: "10px",
    height: props.isMobile ? "50px" : "100px",
    cursor: "pointer",
    margin: props.isMobile ? "15px" : "30px",
    fontSize: props.isMobile ? "12px" : "15px",
    padding: props.isMobile ? "5px" : "15px",
    width: props.isMobile ? "100%" : "",
  };

  useEffect(() => {
    document.body.style.margin = "0";
    document.documentElement.style.margin = "0";
    document.body.style.fontFamily = "'Montserrat', sans-serif";
    document.body.style.height = "100vh";
    document.documentElement.style.height = "100vh";
    document.body.style.display = "block";
    document.documentElement.style.display = "block";

    document.title = "CORE-JIMP";
    const iconLink = document.createElement("link");
    iconLink.rel = "stylesheet";
    iconLink.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap";

    const fontLink = document.createElement("link");
    fontLink.rel = "icon";
    fontLink.href = "/icons/icon1.png";

    console.log(props.user);

    document.head.appendChild(fontLink);
    document.head.appendChild(iconLink);

    if (module === 1.1) {
      console.log("Entrei");
      resumeSales(setSales, setLastSales, setAllSales, setFilteredSale);
    }

    if (saleId !== "") {
      const url = `/Sales/openBudget?sid=${encodeURIComponent(saleId)}`;
      setSaleId("");
      window.open(url);
    }
  }, [module, saleId]);

  const getMenuItemStyle = (itemModule) => {
    let backgroundColor = "";

    const currentMainModule = Math.floor(module);

    if (itemModule === currentMainModule) {
      backgroundColor = stylesColor.dark.orange0;
    } else if (hoveredItem === itemModule) {
      backgroundColor = "gray";
    }
    return { ...mnItem, backgroundColor };
  };

  const handleCpfCnpjFilterChange = (e) => {
    const rawValue = e.target.value;
    const formattedValue = formatCpfCnpj(rawValue);
    setCpfCnpjFilterValue(formattedValue);
    filterSales(
      setSales,
      setFilteredSale,
      filteredSale,
      "cpf_cnpj_filter",
      "cpf_cnpj",
      lastSales,
      allSales
    );
  };

  if (props.isMobile) {
    return (
      <>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            height: "100vh",
            width: "100%",
          }}
        >
          <div style={{ ...st_topDiv }}>
            <button
              style={{ ...st_homeBtn }}
              onClick={() => (window.location.href = "/")}
            ></button>
            <label
              style={{
                display: "flex",
                fontSize: 25,
                fontFamily: "'Montserrat', sans-serif",
                color: "white",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              CORE - JIMP
            </label>
            <button
              style={st_logoutBtn}
              onClick={() => logout(setLoading)}
            ></button>
          </div>
          <div style={{ display: "flex", width: "100%", height: "800px" }}>
            <div style={{ ...st_sidebarDiv }}>
              <label
                id="sales"
                style={getMenuItemStyle(1)}
                onClick={() => setModule(1)}
                onMouseEnter={() => setHoveredItem(1)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a style={{ ...salesImage }} />
              </label>
              <label
                id="pcp"
                style={getMenuItemStyle(2)}
                onClick={() => setModule(2)}
                onMouseEnter={() => setHoveredItem(2)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a style={{ ...pcp }} />
              </label>
              <label
                id="quality"
                style={getMenuItemStyle(3)}
                onClick={() => setModule(3)}
                onMouseEnter={() => setHoveredItem(3)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a style={{ ...quality }} />
                {!props.isMobile && "Qualidade"}
              </label>
              <label
                id="infra"
                style={getMenuItemStyle(4)}
                onClick={() => setModule(4)}
                onMouseEnter={() => setHoveredItem(4)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a style={{ ...infra }} />
                {!props.isMobile && "Infra"}
              </label>
            </div>
            <div style={{ ...mainBkgImage }}>
              {module === 1 && (
                <div style={{ ...st_translucedDiv }}>
                  <div
                    style={{ ...st_translucedBox }}
                    id="addSales"
                    onMouseEnter={() =>
                      (document.getElementById("addSales").style.border =
                        "2px solid orange")
                    }
                    onMouseLeave={() =>
                      (document.getElementById("addSales").style.border = "")
                    }
                    onClick={() => {
                      setLoading(true); // Ativa o estado de carregamento
                      window.location.href = "/Sales/addBudget"; // Redireciona a página
                    }}
                  >
                    <a style={{ ...budget }} />
                    <label style={{ paddingLeft: "5px" }}>
                      Lançar pedido de vendas
                    </label>
                  </div>
                  <div
                    style={{ ...st_translucedBox }}
                    id="searchSales"
                    onMouseEnter={() =>
                      (document.getElementById("searchSales").style.border =
                        "2px solid orange")
                    }
                    onMouseLeave={() =>
                      (document.getElementById("searchSales").style.border = "")
                    }
                    onClick={() => setModule(1.1)}
                  >
                    <a style={{ ...searchSales }} />
                    <label style={{ paddingLeft: "5px" }}>
                      Consultar pedidos
                    </label>
                  </div>
                </div>
              )}
              {module === 1.1 && (
                <div style={{ ...st_translucedDiv }}>
                  <div
                    style={{
                      display: "flex",
                      height: dimensions.boxFilter.height,
                      flexDirection: "row",
                      gap: "10px",
                      flexWrap: "wrap",
                      marginBottom: "20px",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      id="sale_id"
                      style={{
                        ...trBox,
                        fontSize: dimensions.boxFilter.fontSize,
                        height: dimensions.boxFilter.height,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px",
                        flexShrink: 0,
                        marginBottom: dimensions.clientDataDiv.margin,
                      }}
                      onMouseEnter={() =>
                        (document.getElementById("sale_id").style.border =
                          "2px solid orange")
                      }
                      onMouseLeave={() =>
                        (document.getElementById("sale_id").style.border = "")
                      }
                    >
                      <label style={{ paddingBottom: "10px" }}>
                        Filtrar pelo Nº do pedido
                      </label>
                      <input
                        id="id"
                        type="number"
                        inputMode="numeric"
                        style={{
                          ...baseDateInputStyles,
                          width: "calc(100% - 24px)",
                          boxSizing: "border-box",
                        }}
                        onChange={() =>
                          filterSales(
                            setSales,
                            setFilteredSale,
                            filteredSale,
                            "id",
                            "id",
                            lastSales,
                            allSales
                          )
                        }
                      />
                    </div>
                    <div
                      id="date_box"
                      style={{
                        ...trBox,
                        fontSize: dimensions.boxFilter.fontSize,
                        height: dimensions.boxFilter.height,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px",
                        flexShrink: 0,
                      }}
                      onMouseEnter={() =>
                        (document.getElementById("date_box").style.border =
                          "2px solid orange")
                      }
                      onMouseLeave={() =>
                        (document.getElementById("date_box").style.border = "")
                      }
                    >
                      <label style={{ paddingBottom: "10px" }}>
                        Filtrar por data de cadastro
                      </label>
                      <input
                        type="date"
                        id="date"
                        style={{
                          ...baseDateInputStyles,
                          width: "calc(100% - 24px)",
                          boxSizing: "border-box",
                        }}
                        value={dataSelecionada}
                        onChange={(e) => {
                          setDataSelecionada(e.target.value);
                          filterSales(
                            setSales,
                            setFilteredSale,
                            filteredSale,
                            "date",
                            "dt_cadastro",
                            lastSales,
                            allSales
                          );
                        }}
                      />
                    </div>
                    <div
                      id="name_box"
                      style={{
                        ...trBox,
                        fontSize: dimensions.boxFilter.fontSize,
                        height: dimensions.boxFilter.height,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px",
                        flexShrink: 0,
                      }}
                      onMouseEnter={() =>
                        (document.getElementById("name_box").style.border =
                          "2px solid orange")
                      }
                      onMouseLeave={() =>
                        (document.getElementById("name_box").style.border = "")
                      }
                    >
                      <label style={{ paddingBottom: "10px" }}>
                        Filtrar por nome do cliente
                      </label>
                      <input
                        id="client_name"
                        type="text"
                        style={{
                          ...baseDateInputStyles,
                          width: "calc(100% - 24px)",
                          boxSizing: "border-box",
                        }}
                        onChange={() =>
                          filterSales(
                            setSales,
                            setFilteredSale,
                            filteredSale,
                            "client_name",
                            "nome_client",
                            lastSales,
                            allSales
                          )
                        }
                      />
                    </div>
                    <div
                      id="cnpj_cpf_box"
                      style={{
                        ...trBox,
                        fontSize: dimensions.boxFilter.fontSize,
                        height: dimensions.boxFilter.height,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px",
                        flexShrink: 0,
                      }}
                      onMouseEnter={() =>
                        (document.getElementById("cnpj_cpf_box").style.border =
                          "2px solid orange")
                      }
                      onMouseLeave={() =>
                        (document.getElementById("cnpj_cpf_box").style.border =
                          "")
                      }
                    >
                      <label style={{ paddingBottom: "10px" }}>
                        Filtrar por cpf/cnpj
                      </label>
                      <input
                        id="cpf_cnpj_filter"
                        type="text" // Alterado para text para suportar a máscara corretamente
                        inputMode="numeric"
                        style={{
                          ...baseDateInputStyles,
                          width: "calc(100% - 24px)",
                          boxSizing: "border-box",
                        }}
                        value={cpfCnpjFilterValue} // Controlado pelo novo estado
                        onChange={handleCpfCnpjFilterChange} // Novo handler para formatar e filtrar
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      ...trContainer,
                      height: "500px",
                      width: "100%",
                      flexGrow: 1,
                      flexShrink: 1,
                      minHeight: 0,
                      overflow: "scroll",
                      display: "block",
                    }}
                  >
                    <table
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                      }}
                    >
                      <thead>
                        <tr>
                          <th
                            style={{
                              padding: "8px",
                              borderBottom: "1px solid #ddd",
                            }}
                          >
                            Nº do pedido
                          </th>
                          <th
                            style={{
                              padding: "8px",
                              borderBottom: "1px solid #ddd",
                            }}
                          >
                            Data do cadastro
                          </th>
                          <th
                            style={{
                              padding: "8px",
                              borderBottom: "1px solid #ddd",
                            }}
                          >
                            Cpf/Cnpj
                          </th>
                          <th
                            style={{
                              padding: "8px",
                              borderBottom: "1px solid #ddd",
                            }}
                          >
                            Cliente
                          </th>
                          <th
                            style={{
                              padding: "8px",
                              borderBottom: "1px solid #ddd",
                            }}
                          >
                            Situação
                          </th>
                          <th
                            style={{
                              padding: "8px",
                              borderBottom: "1px solid #ddd",
                            }}
                          >
                            Ação
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {sales && sales.length > 0 ? (
                          sales.map((sl) => {
                            return (
                              <tr
                                key={sl.id}
                                style={{ borderBottom: "1px solid #eee" }}
                              >
                                <td
                                  style={{
                                    textAlign: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  {sl.id}
                                </td>
                                <td
                                  style={{
                                    textAlign: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  {sl.dt_cadastro}
                                </td>
                                <td
                                  style={{
                                    textAlign: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  {sl.cpf_cnpj}
                                </td>
                                <td style={{ padding: "8px" }}>
                                  {sl.nome_client}
                                </td>
                                <td
                                  style={{
                                    padding: "8px",
                                    backgroundColor:
                                      sl.situacao === "PENDENTE"
                                        ? "rgba(255, 0, 0, 0.2)"
                                        : "transparent",
                                    borderRadius:
                                      sl.situacao === "PENDENTE" ? "4px" : "0",
                                    textAlign: "center",
                                  }}
                                >
                                  {sl.situacao}
                                </td>
                                <td
                                  style={{
                                    display: "flex",
                                    textAlign: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <button
                                    style={{
                                      backgroundColor: stylesColor.dark.orange0,
                                      borderRadius: "5px",
                                      color: "white",
                                      fontWeight: "bold",
                                      padding: dimensions.clientDataDiv.padding,
                                      margin: dimensions.clientDataDiv.margin,
                                    }}
                                    onClick={() => openSale(setLoading, sl.id)}
                                  >
                                    Abrir
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr>
                            <td
                              colSpan="4"
                              style={{ textAlign: "center", padding: "20px" }}
                            >
                              Nenhum pedido de venda encontrado.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {module === 2 && (
                <div style={{ ...st_translucedDiv }}>
                  <div
                    style={{ ...st_translucedBox }}
                    id="sh"
                    onMouseEnter={() =>
                      (document.getElementById("sh").style.border =
                        "2px solid orange")
                    }
                    onMouseLeave={() =>
                      (document.getElementById("sh").style.border = "")
                    }
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/structureHandler";
                    }}
                  >
                    <a style={{ ...scImage }} />
                    <label style={{ padding: "10px" }}>
                      Manipulador de estrutura
                    </label>
                  </div>
                  <div
                    style={{ ...st_translucedBox }}
                    id="shN"
                    onMouseEnter={() =>
                      (document.getElementById("shN").style.border =
                        "2px solid orange")
                    }
                    onMouseLeave={() =>
                      (document.getElementById("shN").style.border = "")
                    }
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/PCP/mc";
                    }}
                  >
                    <a style={{ ...scImage }} />
                    <label style={{ padding: "10px" }}>
                      Manipulador de estrutura (Nova)
                    </label>
                  </div>
                  <div
                    style={{ ...st_translucedBox }}
                    id="sHconfig"
                    onMouseEnter={() =>
                      (document.getElementById("sHconfig").style.border =
                        "2px solid orange")
                    }
                    onMouseLeave={() =>
                      (document.getElementById("sHconfig").style.border = "")
                    }
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/PCP/mcSettings";
                    }}
                  >
                    <a style={{ ...settings }} />
                    <label style={{ padding: "10px", maxWidth: "150px" }}>
                      Configurações do Manipulador de estrutura
                    </label>
                  </div>
                </div>
              )}
              {module === 3 && (
                <div style={{ ...st_translucedDiv }}>
                  <div
                    style={{ ...st_translucedBox }}
                    id="addCheckList"
                    onMouseEnter={() =>
                      (document.getElementById("addCheckList").style.border =
                        "2px solid orange")
                    }
                    onMouseLeave={() =>
                      (document.getElementById("addCheckList").style.border =
                        "")
                    }
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/Quality/checklist";
                    }}
                  >
                    <a style={{ ...scImage }} />
                    <label style={{ padding: "10px" }}>
                      Preencher novo checklist
                    </label>
                  </div>
                  <div
                    style={{ ...st_translucedBox }}
                    id="checkListSt"
                    onMouseEnter={() =>
                      (document.getElementById("checkListSt").style.border =
                        "2px solid orange")
                    }
                    onMouseLeave={() =>
                      (document.getElementById("checkListSt").style.border = "")
                    }
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/Quality/editChecklist";
                    }}
                  >
                    <a style={{ ...editImg }} />
                    <label style={{ padding: "10px" }}>
                      Completar checklists pendentes
                    </label>
                  </div>
                </div>
              )}
              {module === 4 && (
                <div style={{ ...st_translucedDiv }}>
                  <div
                    style={{ ...st_translucedBox }}
                    id="addSales"
                    onMouseEnter={() =>
                      (document.getElementById("addSales").style.border =
                        "2px solid orange")
                    }
                    onMouseLeave={() =>
                      (document.getElementById("addSales").style.border = "")
                    }
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/Infra/users";
                    }}
                  >
                    <a style={{ ...userImage }} />
                    <label style={{ padding: "10px" }}>
                      Cadastro de usuários
                    </label>
                  </div>
                  <div
                    style={{ ...st_translucedBox }}
                    id="addDevice"
                    onMouseEnter={() =>
                      (document.getElementById("addDevice").style.border =
                        "2px solid orange")
                    }
                    onMouseLeave={() =>
                      (document.getElementById("addDevice").style.border = "")
                    }
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/Infra/addDevice";
                    }}
                  >
                    <a style={{ ...device }} />
                    <label style={{ padding: "10px" }}>
                      Cadastro de Dispositivos
                    </label>
                  </div>
                  <div
                    style={{ ...st_translucedBox }}
                    id="addSales"
                    onMouseEnter={(e) =>
                      (e.target.style.border = "2px solid orange")
                    }
                    onMouseLeave={(e) => (e.target.style.border = "")}
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/Infra/tickets";
                    }}
                  >
                    <a style={{ ...searchSales }} />
                    <label style={{ padding: "10px" }}>Abrir chamado</label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {loading && (
          <div style={{ ...lgBox, position: "fixed" }}>
            <label style={lgLabel}>Carregando...</label>
          </div>
        )}
        {saleZoom}
      </>
    );
  } else {
    return (
      <>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            height: "100vh",
            width: "100%",
          }}
        >
          <div style={{ ...st_topDiv }}>
            <button
              style={{ ...st_homeBtn }}
              onClick={() => (window.location.href = "/")}
            ></button>
            <label
              style={{
                display: "flex",
                fontSize: 25,
                fontFamily: "'Montserrat', sans-serif",
                color: "white",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              CORE - JIMP
            </label>
            <button
              style={st_logoutBtn}
              onClick={() => logout(setLoading)}
            ></button>
          </div>
          <div style={{ display: "flex", width: "100%", height: "100%" }}>
            <div style={{ ...st_sidebarDiv }}>
              <label
                id="sales"
                style={getMenuItemStyle(1)}
                onClick={() => setModule(1)}
                onMouseEnter={() => setHoveredItem(1)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a style={{ ...salesImage }} />
                <label style={{ paddingLeft: "10px" }}>
                  {!props.isMobile && "Vendas"}
                </label>
              </label>
              <label
                id="pcp"
                style={getMenuItemStyle(2)}
                onClick={() => setModule(2)}
                onMouseEnter={() => setHoveredItem(2)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a style={{ ...pcp }} />
                <label style={{ paddingLeft: "10px" }}>
                  {!props.isMobile && "PCP"}
                </label>
              </label>
              <label
                id="quality"
                style={getMenuItemStyle(3)}
                onClick={() => setModule(3)}
                onMouseEnter={() => setHoveredItem(3)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a style={{ ...quality }} />
                <label style={{ paddingLeft: "10px" }}>
                  {!props.isMobile && "Qualidade"}
                </label>
              </label>
              <label
                id="infra"
                style={getMenuItemStyle(4)}
                onClick={() => setModule(4)}
                onMouseEnter={() => setHoveredItem(4)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a style={{ ...infra }} />
                <label style={{ paddingLeft: "10px" }}>
                  {!props.isMobile && "Infra"}
                </label>
              </label>
            </div>
            <div style={{ ...mainBkgImage }}>
              {module === 1 && (
                <div style={{ ...st_translucedDiv }}>
                  <div
                    style={{ ...st_translucedBox }}
                    id="addSales"
                    onMouseEnter={() =>
                      (document.getElementById("addSales").style.border =
                        "2px solid orange")
                    }
                    onMouseLeave={() =>
                      (document.getElementById("addSales").style.border = "")
                    }
                    onClick={() => {
                      setLoading(true); // Ativa o estado de carregamento
                      window.location.href = "/Sales/addBudget"; // Redireciona a página
                    }}
                  >
                    <a style={{ ...budget }} />
                    <label style={{ paddingLeft: "5px" }}>
                      Lançar pedido de vendas
                    </label>
                  </div>
                  <div
                    style={{ ...st_translucedBox }}
                    id="searchSales"
                    onMouseEnter={() =>
                      (document.getElementById("searchSales").style.border =
                        "2px solid orange")
                    }
                    onMouseLeave={() =>
                      (document.getElementById("searchSales").style.border = "")
                    }
                    onClick={() => setModule(1.1)}
                  >
                    <a style={{ ...searchSales }} />
                    <label style={{ paddingLeft: "5px" }}>
                      Consultar pedidos
                    </label>
                  </div>
                </div>
              )}
              {module === 1.1 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      ...st_translucedDiv,
                      justifyContent: "flex-start",
                    }}
                    id="teste"
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "row",
                        gap: "10px",
                        flexWrap: "wrap",
                        marginBottom: "5px",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        id="sale_id"
                        style={{
                          ...trBox,
                          fontSize: dimensions.boxFilter.fontSize,
                          height: dimensions.boxFilter.height,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "10px",
                          flexShrink: 0,
                          marginBottom: dimensions.clientDataDiv.margin,
                        }}
                        onMouseEnter={() =>
                          (document.getElementById("sale_id").style.border =
                            "2px solid orange")
                        }
                        onMouseLeave={() =>
                          (document.getElementById("sale_id").style.border = "")
                        }
                      >
                        <label style={{ paddingBottom: "10px" }}>
                          Filtrar pelo Nº do pedido
                        </label>
                        <input
                          id="id"
                          type="number"
                          inputMode="numeric"
                          style={{
                            ...baseDateInputStyles,
                            width: "calc(100% - 24px)",
                            boxSizing: "border-box",
                          }}
                          onChange={() =>
                            filterSales(
                              setSales,
                              setFilteredSale,
                              filteredSale,
                              "id",
                              "id",
                              lastSales,
                              allSales
                            )
                          }
                        />
                      </div>
                      <div
                        id="date_box"
                        style={{
                          ...trBox,
                          fontSize: dimensions.boxFilter.fontSize,
                          height: dimensions.boxFilter.height,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "10px",
                          flexShrink: 0,
                        }}
                        onMouseEnter={() =>
                          (document.getElementById("date_box").style.border =
                            "2px solid orange")
                        }
                        onMouseLeave={() =>
                          (document.getElementById("date_box").style.border =
                            "")
                        }
                      >
                        <label style={{ paddingBottom: "10px" }}>
                          Filtrar por data de cadastro
                        </label>
                        <input
                          type="date"
                          id="date"
                          style={{
                            ...baseDateInputStyles,
                            width: "calc(100% - 24px)",
                            boxSizing: "border-box",
                          }}
                          value={dataSelecionada}
                          onChange={(e) => {
                            setDataSelecionada(e.target.value);
                            filterSales(
                              setSales,
                              setFilteredSale,
                              filteredSale,
                              "date",
                              "dt_cadastro",
                              lastSales,
                              allSales
                            );
                          }}
                        />
                      </div>
                      <div
                        id="name_box"
                        style={{
                          ...trBox,
                          fontSize: dimensions.boxFilter.fontSize,
                          height: dimensions.boxFilter.height,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "10px",
                          flexShrink: 0,
                        }}
                        onMouseEnter={() =>
                          (document.getElementById("name_box").style.border =
                            "2px solid orange")
                        }
                        onMouseLeave={() =>
                          (document.getElementById("name_box").style.border =
                            "")
                        }
                      >
                        <label style={{ paddingBottom: "10px" }}>
                          Filtrar por nome do cliente
                        </label>
                        <input
                          id="client_name"
                          type="text"
                          style={{
                            ...baseDateInputStyles,
                            width: "calc(100% - 24px)",
                            boxSizing: "border-box",
                          }}
                          onChange={() =>
                            filterSales(
                              setSales,
                              setFilteredSale,
                              filteredSale,
                              "client_name",
                              "nome_client",
                              lastSales,
                              allSales
                            )
                          }
                        />
                      </div>
                      <div
                        id="cnpj_cpf_box"
                        style={{
                          ...trBox,
                          fontSize: dimensions.boxFilter.fontSize,
                          height: dimensions.boxFilter.height,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "10px",
                          flexShrink: 0,
                        }}
                        onMouseEnter={() =>
                          (document.getElementById(
                            "cnpj_cpf_box"
                          ).style.border = "2px solid orange")
                        }
                        onMouseLeave={() =>
                          (document.getElementById(
                            "cnpj_cpf_box"
                          ).style.border = "")
                        }
                      >
                        <label style={{ paddingBottom: "10px" }}>
                          Filtrar por cpf/cnpj
                        </label>
                        <input
                          id="cpf_cnpj_filter"
                          type="text" // Alterado para text para suportar a máscara corretamente
                          inputMode="numeric"
                          style={{
                            ...baseDateInputStyles,
                            width: "calc(100% - 24px)",
                            boxSizing: "border-box",
                          }}
                          value={cpfCnpjFilterValue} // Controlado pelo novo estado
                          onChange={handleCpfCnpjFilterChange} // Novo handler para formatar e filtrar
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        height: "400px",
                        width: "100%",
                        flexGrow: 1,
                        flexShrink: 1,
                        overflowY: "scroll",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        backdropFilter: "blur(3px)",
                        padding: "10px",
                        borderRadius: "8px",
                        boxSizing: "border-box",
                        scrollbarWidth: "thin",
                        scrollbarColor: "#a0522d #1a1a1a",
                      }}
                    >
                      <table
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                        }}
                      >
                        <thead>
                          <tr>
                            <th
                              style={{
                                padding: "8px",
                                borderBottom: "1px solid #ddd",
                              }}
                            >
                              Nº do pedido
                            </th>
                            <th
                              style={{
                                padding: "8px",
                                borderBottom: "1px solid #ddd",
                              }}
                            >
                              Data do cadastro
                            </th>
                            <th
                              style={{
                                padding: "8px",
                                borderBottom: "1px solid #ddd",
                              }}
                            >
                              Cpf/Cnpj
                            </th>
                            <th
                              style={{
                                padding: "8px",
                                borderBottom: "1px solid #ddd",
                              }}
                            >
                              Cliente
                            </th>
                            <th
                              style={{
                                padding: "8px",
                                borderBottom: "1px solid #ddd",
                              }}
                            >
                              Situação
                            </th>
                            <th
                              style={{
                                padding: "8px",
                                borderBottom: "1px solid #ddd",
                              }}
                            >
                              Ação
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {sales && sales.length > 0 ? (
                            sales.map((sl) => {
                              return (
                                <tr
                                  key={sl.id}
                                  style={{ borderBottom: "1px solid #eee" }}
                                >
                                  <td
                                    style={{
                                      textAlign: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    {sl.id}
                                  </td>
                                  <td
                                    style={{
                                      textAlign: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    {sl.dt_cadastro}
                                  </td>
                                  <td
                                    style={{
                                      textAlign: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    {sl.cpf_cnpj}
                                  </td>
                                  <td style={{ padding: "8px" }}>
                                    {sl.nome_client}
                                  </td>
                                  <td
                                    style={{
                                      padding: "8px",
                                      backgroundColor:
                                        sl.situacao === "CANCELADO"
                                          ? "rgba(255, 0, 0, 1)"
                                          : sl.situacao === "PENDENTE"
                                          ? "rgba(241, 100, 38, 0.5)"
                                          : sl.situacao === "APROVADO"
                                          ? "rgba(40, 167, 69, 0.7)"
                                          : "transparent",
                                      borderRadius:
                                        sl.situacao === "PENDENTE"
                                          ? "4px"
                                          : "0",
                                      textAlign: "center",
                                    }}
                                  >
                                    {sl.situacao}
                                  </td>
                                  <td
                                    style={{
                                      display: "flex",
                                      textAlign: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <button
                                      style={{
                                        backgroundColor:
                                          stylesColor.dark.orange0,
                                        borderRadius: "5px",
                                        color: "white",
                                        fontWeight: "bold",
                                        padding:
                                          dimensions.clientDataDiv.padding,
                                        margin: dimensions.clientDataDiv.margin,
                                      }}
                                      onClick={() => {
                                        openSale(setLoading, sl.id);
                                        encodeId(sl.id, setSaleId);
                                      }}
                                    >
                                      Abrir
                                    </button>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <tr>
                              <td
                                colSpan="4"
                                style={{ textAlign: "center", padding: "20px" }}
                              >
                                Nenhum pedido de venda encontrado.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
              {module === 2 && (
                <div style={{ ...st_translucedDiv }}>
                  <div
                    style={{ ...st_translucedBox }}
                    id="sh"
                    onMouseEnter={() =>
                      (document.getElementById("sh").style.border =
                        "2px solid orange")
                    }
                    onMouseLeave={() =>
                      (document.getElementById("sh").style.border = "")
                    }
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/structureHandler";
                    }}
                  >
                    <a style={{ ...scImage }} />
                    <label style={{ padding: "10px" }}>
                      Manipulador de estrutura
                    </label>
                  </div>
                  <div
                    style={{ ...st_translucedBox }}
                    id="shN"
                    onMouseEnter={() =>
                      (document.getElementById("shN").style.border =
                        "2px solid orange")
                    }
                    onMouseLeave={() =>
                      (document.getElementById("shN").style.border = "")
                    }
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/PCP/mc";
                    }}
                  >
                    <a style={{ ...scImage }} />
                    <label style={{ padding: "10px" }}>
                      Manipulador de estrutura (Nova)
                    </label>
                  </div>
                  <div
                    style={{ ...st_translucedBox }}
                    id="sHconfig"
                    onMouseEnter={() =>
                      (document.getElementById("sHconfig").style.border =
                        "2px solid orange")
                    }
                    onMouseLeave={() =>
                      (document.getElementById("sHconfig").style.border = "")
                    }
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/PCP/mcSettings";
                    }}
                  >
                    <a style={{ ...settings }} />
                    <label style={{ padding: "10px" }}>Parâmetros do PCP</label>
                  </div>
                </div>
              )}
              {module === 3 && (
                <div
                  style={{
                    ...st_translucedDiv,
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{ ...st_translucedBox }}
                    onMouseEnter={(e) =>
                      (e.target.style.border = "2px solid orange")
                    }
                    onMouseLeave={(e) => (e.target.style.border = "")}
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/Quality/checklist";
                    }}
                  >
                    <a style={{ ...scImage }} />
                    <label style={{ padding: "10px" }}>
                      Preencher novo checklist
                    </label>
                  </div>
                  <div
                    style={{ ...st_translucedBox }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.border = "2px solid orange")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.border = "")}
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/Quality/editChecklist";
                    }}
                  >
                    <a style={{ ...editImg }} />
                    <label style={{ padding: "10px" }}>
                      Consultar Checklist
                    </label>
                  </div>
                  <div
                    style={{ ...st_translucedBox }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.border = "2px solid orange")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.border = "")}
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/Quality/quality";
                    }}
                  >
                    <a style={{ ...settings }} />
                    <label style={{ padding: "10px" }}>
                      Parâmetros do checklist
                    </label>
                  </div>
                  <div
                    style={{ ...st_translucedBox }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.border = "2px solid orange")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.border = "")}
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/Quality/rnc";
                    }}
                  >
                    <a style={{ ...problem }} />
                    <label style={{ padding: "10px" }}>Abrir nova RNC</label>
                  </div>
                  <div
                    style={{ ...st_translucedBox }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.border = "2px solid orange")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.border = "")}
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/Quality/openRNC";
                    }}
                  >
                    <a style={{ ...editImg }} />
                    <label style={{ padding: "10px" }}>Consultar RNC</label>
                  </div>
                </div>
              )}
              {module === 4 && (
                <div style={{ ...st_translucedDiv }}>
                  {(props.user.role === "adm" ||
                    props.user.role === "infra") && (
                    <div
                      style={{ ...st_translucedBox }}
                      id="addSales"
                      onMouseEnter={() =>
                        (document.getElementById("addSales").style.border =
                          "2px solid orange")
                      }
                      onMouseLeave={() =>
                        (document.getElementById("addSales").style.border = "")
                      }
                      onClick={() => {
                        setLoading(true);
                        window.location.href = "/Infra/users";
                      }}
                    >
                      <a style={{ ...userImage }} />
                      <label style={{ padding: "10px" }}>
                        Cadastro de usuários
                      </label>
                    </div>
                  )}
                  <div
                    style={{ ...st_translucedBox }}
                    id="tickets"
                    onMouseEnter={(e) =>
                      (e.target.style.border = "2px solid orange")
                    }
                    onMouseLeave={(e) => (e.target.style.border = "")}
                    onClick={() => {
                      setLoading(true);
                      window.location.href = "/Infra/tickets";
                    }}
                  >
                    <a style={{ ...support }} />
                    <label style={{ padding: "10px" }}>Abrir chamado</label>
                  </div>
                  {props.user.role === "adm" && (
                    <div
                      style={{ ...st_translucedBox }}
                      id="addDevice"
                      onMouseEnter={() =>
                        (document.getElementById("addDevice").style.border =
                          "2px solid orange")
                      }
                      onMouseLeave={() =>
                        (document.getElementById("addDevice").style.border = "")
                      }
                      onClick={() => {
                        setLoading(true);
                        window.location.href = "/Infra/addDevice";
                      }}
                    >
                      <a style={{ ...device }} />
                      <label style={{ padding: "10px" }}>
                        Cadastro de Dispositivos
                      </label>
                    </div>
                  )}
                  {props.user.role === "adm" && (
                    <div
                      style={{ ...st_translucedBox }}
                      id="searchTickets"
                      onMouseEnter={(e) =>
                        (e.target.style.border = "2px solid orange")
                      }
                      onMouseLeave={(e) => (e.target.style.border = "")}
                      onClick={() => {
                        window.open("/Infra/openTickets");
                      }}
                    >
                      <a style={{ ...searchSales }} />
                      <label style={{ padding: "10px" }}>
                        Histórico de chamados
                      </label>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        {loading && (
          <div style={{ ...lgBox, position: "fixed" }}>
            <label style={lgLabel}>Carregando...</label>
          </div>
        )}
        {saleZoom}
      </>
    );
  }
}
